"use client";

import React, { HTMLAttributes, useState } from "react";
import { format } from "date-fns";
import { CalendarDay, DayPicker, Modifiers } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

const CustomCalendar = () => {
  const [month, setMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  const handlePrevMonth = () => {
    setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;
    setSelectedDay(date);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Weekday = (props: any) => {
    const name = props["aria-label"].slice(0, 3);
    return <th {...props}>{name}</th>;
  };

  const Day = (
    props: {
      day: CalendarDay;
      modifiers: Modifiers;
    } & HTMLAttributes<HTMLDivElement>
  ) => {
    const { day, modifiers, ...tdProps } = props;
    const t = useTranslations("label");
    const date = day.date;
    const isOutside = modifiers.outside;
    const isDisabled = modifiers.disabled;
    const isSelected =
      selectedDay &&
      format(selectedDay, "yyyy-MM-dd") === format(date, "yyyy-MM-dd");

    return (
      <td
        {...tdProps}
        onClick={() => !isDisabled && handleSelect(date)}
        className={cn(
          "border rounded-lg py-2 cursor-pointer transition duration-200",
          {
            "bg-[#F5F5F5]": isOutside,
            "bg-sub-2 border border-secondary border-solid":
              !isOutside && !isDisabled,
            "opacity-45": isSelected,
          }
        )}
      >
        <p
          className={cn(
            "text-md-1 font-semibold pb-2 text-[#999] text-center",
            {
              "text-[#CCC]": isOutside,
              "text-[#999]": isDisabled,
              "text-sub-3": !isDisabled && !isOutside,
            }
          )}
        >
          {date.getDate()}
        </p>
        {!isOutside ? (
          <p
            className={cn("text-center", {
              "text-[#AAA]": isDisabled,
              "text-main": !isDisabled,
            })}
          >
            {isDisabled ? t("busy") : t("free")}
          </p>
        ) : (
          <div className="h-6" />
        )}
      </td>
    );
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-3xl shadow-[0px 0px 30px 0px rgba(242, 84, 45, 0.10)] border border-opa-8">
      <div className="flex justify-center gap-2 items-center mb-4 ">
        <button onClick={handlePrevMonth} className="p-2">
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <p className="text-md-1 text-sub-3">{format(month, "MMMM yyyy")}</p>
        <button onClick={handleNextMonth} className="p-2">
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>

      <DayPicker
        mode="single"
        selected={selectedDay}
        onSelect={handleSelect}
        month={month}
        onMonthChange={setMonth}
        showOutsideDays
        className="custom-daypicker"
        components={{
          Nav: () => <></>,
          Weekday,
          Day,
        }}
        disabled={[
          new Date("Tue Mar 04 2025 00:00:00 GMT+0000"),
          new Date("Fri Mar 28 2025 00:00:00 GMT+0000"),
          new Date("Mon Mar 31 2025 00:00:00 GMT+0000"),
          new Date("Sat Mar 22 2025 00:00:00 GMT+0000"),
          new Date("Mon Mar 10 2025 00:00:00 GMT+0000"),
        ]}
      />
    </div>
  );
};

export default CustomCalendar;
