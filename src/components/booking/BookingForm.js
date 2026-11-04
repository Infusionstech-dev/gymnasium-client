"use client";

import { useState, useSyncExternalStore } from "react";
import Icon from "@/components/ui/Icon";
import {
  arrivalTimes,
  athleticGoals,
  bookableDayCount,
  closingTime,
  experienceTracks,
  facilityHubs,
  maxBookingDaysAhead,
  openingTime,
} from "@/data/booking";

const inputClassName =
  "w-full rounded-md bg-ink-soft px-5 py-4 text-white placeholder:text-white/50 outline-none ring-1 ring-transparent transition focus:ring-mint [color-scheme:dark]";

// Formats a Date as "YYYY-MM-DD" in local time (the format <input type="date"> uses).
function toDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, dayCount) {
  const result = new Date(date);
  result.setDate(date.getDate() + dayCount);
  return result;
}

// "2026-11-05" -> "Nov 5"
function formatDateLabel(dateValue) {
  const [year, month, day] = dateValue.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// "17:30" -> "05:30 PM"
function formatTimeLabel(timeValue) {
  const [hours, minutes] = timeValue.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const twelveHour = hours % 12 || 12;
  return `${String(twelveHour).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${period}`;
}

function buildUpcomingDays(today, dayCount) {
  return Array.from({ length: dayCount }, (_, dayOffset) => {
    const date = addDays(today, dayOffset);
    return {
      value: toDateValue(date),
      weekday: dayOffset === 0 ? "Today" : date.toLocaleDateString("en-US", { weekday: "short" }),
      label: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    };
  });
}

// No-op subscription: used with useSyncExternalStore to detect browser vs server rendering.
const subscribeToNothing = () => () => {};

function StepHeading({ stepNumber, children }) {
  return (
    <h3 className="flex items-center gap-3 font-display text-xl font-bold uppercase tracking-wide">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint font-sans text-sm text-ink">
        {stepNumber}
      </span>
      {children}
    </h3>
  );
}

function SelectField({ name, value, onChange, placeholder, options }) {
  return (
    <div className="relative">
      <select name={name} value={value} onChange={onChange} required className={`${inputClassName} appearance-none pr-12 ${value ? "" : "text-white/50"}`}>
        {placeholder && (
          <option value="" disabled className="bg-ink-soft text-white/50">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option} className="bg-ink-soft text-white">
            {option}
          </option>
        ))}
      </select>
      <Icon name="chevron" className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white" />
    </div>
  );
}

function PickerField({ icon, label, isActive, children }) {
  return (
    <label
      className={`flex items-center gap-3 rounded-md px-4 py-2 transition ${
        isActive ? "bg-mint/15 ring-1 ring-mint" : "bg-ink-soft ring-1 ring-transparent hover:bg-[#232d32]"
      }`}
    >
      <Icon name={icon} className="h-5 w-5 shrink-0 text-mint" />
      <span className="font-display text-sm font-semibold uppercase tracking-wider text-white/70">{label}</span>
      {children}
    </label>
  );
}

const pickerInputClassName =
  "min-w-0 flex-1 bg-transparent font-display text-lg font-bold tracking-wider text-white outline-none [color-scheme:dark]";

export default function BookingForm() {
  // Dates depend on the visitor's clock, so they are only built in the browser.
  const isBrowser = useSyncExternalStore(subscribeToNothing, () => true, () => false);
  const today = isBrowser ? new Date() : null;
  const todayValue = today ? toDateValue(today) : "";
  const upcomingDays = today ? buildUpcomingDays(today, bookableDayCount) : [];
  const lastBookableDate = today ? toDateValue(addDays(today, maxBookingDaysAhead)) : "";

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    track: experienceTracks[0].id,
    facility: facilityHubs[0],
    date: "", // empty means "today"
    time: arrivalTimes[0],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    goal: "",
    smsOptIn: true,
  });

  const selectedDate = formValues.date || todayValue;
  const isQuickPickDate = upcomingDays.some((day) => day.value === selectedDate);
  const isQuickPickTime = arrivalTimes.includes(formValues.time);

  const updateField = (fieldName, fieldValue) =>
    setFormValues((previousValues) => ({ ...previousValues, [fieldName]: fieldValue }));

  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    // Clearing the clock picker keeps the previously chosen time instead of leaving it blank.
    if (name === "time" && !value) return;
    updateField(name, type === "checkbox" ? checked : value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: send formValues to the booking API once the backend is ready.
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl bg-ink-soft/60 p-10 text-center">
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-mint text-ink">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h2 className="mt-6 font-display text-4xl font-bold uppercase">You&apos;re booked, {formValues.firstName}!</h2>
        <p className="mt-3 text-white/75">
          See you on {formatDateLabel(selectedDate)} at {formatTimeLabel(formValues.time)} — {formValues.facility}. A confirmation has been sent to {formValues.email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl bg-[#151e22] p-6 sm:p-10">
      <p className="font-display text-sm font-bold uppercase tracking-wider text-gold">Reservation Desk</p>
      <h1 className="mt-2 font-display text-4xl font-bold uppercase">Configure your free trial</h1>
      <p className="mt-2 text-lg text-white/80">Complete your registration to lock your spot and bypass arrival intake.</p>

      {/* Step 1 */}
      <fieldset className="mt-12">
        <legend><StepHeading stepNumber={1}>Select your experience track</StepHeading></legend>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {experienceTracks.map((track) => {
            const isSelected = formValues.track === track.id;
            return (
              <button
                key={track.id}
                type="button"
                onClick={() => updateField("track", track.id)}
                aria-pressed={isSelected}
                className={`rounded-lg p-5 text-left transition ${
                  isSelected ? "bg-[#2a3438] ring-1 ring-mint" : "bg-ink-soft hover:bg-[#232d32]"
                }`}
              >
                <Icon name={track.icon} className="h-7 w-7 text-mint" />
                <span className="mt-4 block font-display text-2xl font-bold uppercase leading-tight">{track.title}</span>
                <span className="mt-2 block text-sm text-white/75">{track.text}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Step 2 */}
      <fieldset className="mt-12">
        <legend><StepHeading stepNumber={2}>Preferred facility hub</StepHeading></legend>
        <div className="mt-5">
          <SelectField name="facility" value={formValues.facility} onChange={handleInputChange} options={facilityHubs} />
        </div>
      </fieldset>

      {/* Step 3 */}
      <fieldset className="mt-12">
        <legend><StepHeading stepNumber={3}>Preferred schedule window</StepHeading></legend>
        <div className="mt-5 grid min-h-[82px] grid-cols-2 gap-3 sm:grid-cols-4">
          {upcomingDays.map((day) => {
            const isSelected = selectedDate === day.value;
            return (
              <button
                key={day.value}
                type="button"
                onClick={() => updateField("date", day.value)}
                aria-pressed={isSelected}
                className={`rounded-md py-4 text-center font-display uppercase transition ${
                  isSelected ? "bg-mint text-ink" : "bg-ink-soft text-white hover:bg-[#232d32]"
                }`}
              >
                <span className={`block text-sm font-semibold tracking-wider ${isSelected ? "" : "text-white/70"}`}>{day.weekday}</span>
                <span className="block text-3xl font-bold">{day.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-3 sm:max-w-sm">
          <PickerField icon="calendar" label="Other date" isActive={isBrowser && !isQuickPickDate}>
            <input
              type="date"
              name="date"
              value={isQuickPickDate ? "" : selectedDate}
              min={todayValue}
              max={lastBookableDate}
              onChange={handleInputChange}
              aria-label="Pick another date"
              className={pickerInputClassName}
            />
          </PickerField>
        </div>

        <p className="mt-6 font-display text-sm font-semibold uppercase tracking-wider text-white/80">Available athlete arrival windows</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {arrivalTimes.map((time) => {
            const isSelected = formValues.time === time;
            return (
              <button
                key={time}
                type="button"
                onClick={() => updateField("time", time)}
                aria-pressed={isSelected}
                className={`rounded px-4 py-2 font-display text-lg font-bold tracking-wider transition ${
                  isSelected ? "bg-mint text-ink" : "bg-ink-soft text-white hover:bg-[#232d32]"
                }`}
              >
                {formatTimeLabel(time)}
              </button>
            );
          })}
        </div>

        <div className="mt-3 sm:max-w-sm">
          <PickerField icon="clock" label="Other time" isActive={!isQuickPickTime}>
            <input
              type="time"
              name="time"
              value={isQuickPickTime ? "" : formValues.time}
              min={openingTime}
              max={closingTime}
              step={900}
              onChange={handleInputChange}
              aria-label={`Pick another time between ${formatTimeLabel(openingTime)} and ${formatTimeLabel(closingTime)}`}
              className={pickerInputClassName}
            />
          </PickerField>
        </div>
      </fieldset>

      {/* Step 4 */}
      <fieldset className="mt-12">
        <legend><StepHeading stepNumber={4}>Athlete profile information</StepHeading></legend>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <input name="firstName" value={formValues.firstName} onChange={handleInputChange} placeholder="First Name" required autoComplete="given-name" className={inputClassName} />
          <input name="lastName" value={formValues.lastName} onChange={handleInputChange} placeholder="Last Name" required autoComplete="family-name" className={inputClassName} />
          <input name="email" type="email" value={formValues.email} onChange={handleInputChange} placeholder="Email Address" required autoComplete="email" className={inputClassName} />
          <input name="phone" type="tel" value={formValues.phone} onChange={handleInputChange} placeholder="Mobile Number" required autoComplete="tel" className={inputClassName} />
          <div className="sm:col-span-2">
            <SelectField name="goal" value={formValues.goal} onChange={handleInputChange} placeholder="Primary Athletic Goal" options={athleticGoals} />
          </div>
        </div>

        <label className="mt-6 flex cursor-pointer items-start gap-4 text-white/85">
          <input name="smsOptIn" type="checkbox" checked={formValues.smsOptIn} onChange={handleInputChange} className="mt-1 h-5 w-5 shrink-0 accent-mint" />
          Send me facility access codes and preparation guidelines via SMS. Standard carrier rates may apply.
        </label>
      </fieldset>

      <button
        type="submit"
        className="mt-10 rounded-md bg-mint px-7 py-3.5 font-display text-xl font-bold uppercase tracking-wide text-ink transition-colors hover:bg-white"
      >
        Confirm my free pass &amp; schedule
      </button>
    </form>
  );
}
