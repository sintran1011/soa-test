import { useState } from "react";

import { format, getDate, isSameDay, isSameMonth } from "date-fns";
import type DatePickerProps from "react-datepicker";
import DatePicker from "react-datepicker";
import { RefCallBack } from "react-hook-form";

import {
  ArrowDropdownIcon,
  CalendarIcon,
  ClockCircleIcon,
} from "@/assets/icons";

import "react-datepicker/dist/react-datepicker.css";
import { cn } from "@/utils";

export interface CustomDatePickerProps extends Partial<DatePickerProps> {
  className?: string;
  width?: string;
  disabled?: boolean;
  disabledDate?: (date: Date) => boolean;
  disabledHoliday?: boolean;
  excludeDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  onChangeDate?: (date: Date) => void;
  selectedDate?: Date;
  onBlur?: () => void;
  ref?: RefCallBack;
  isFullWidth?: boolean;
  showTimeSelect?: boolean;
  showTimeSelectOnly?: boolean;
  timeIntervals?: number;
  timeCaption?: string;
  dateFormat?: string;
  readOnly?: boolean;
  error?: boolean;
}
const CustomDatePicker = (props: CustomDatePickerProps) => {
  const {
    width = "300px",
    className = "",
    dateFormat = "dd/MM/yyyy",
    placeholder = "dd/mm/yyy",
    disabledDate,
    excludeDates = [],
    minDate,
    maxDate,
    onChangeDate = () => {},
    selectedDate,
    isFullWidth = false,
    readOnly = false,
    showTimeSelectOnly = false,
    error = false,
    ...rest
  } = props;
  const [value, setValue] = useState<Date>();

  const handleDisabledDate = (date: Date) => {
    const isDisabledDateByCondition = disabledDate ? disabledDate(date) : false;
    const disabled = isDisabledDateByCondition;
    return !disabled;
  };

  const renderDayContents = (day: number, date: Date) => {
    const isThisMonth = isSameMonth(new Date(), date);
    const dateTitle = format(date, dateFormat);
    return (
      <p
        className={cn(!isThisMonth && "text-grey-1 opacity-75")}
        title={dateTitle}
      >
        {getDate(date)}
      </p>
    );
  };

  const renderDateClassName = (date: Date) => {
    const isToday = isSameDay(new Date(), date);
    const isSelectedDate = selectedDate
      ? isSameDay(selectedDate, date)
      : isSameDay(value || "", date);
    return cn(
      "!rounded-md !text-black",
      isSelectedDate && "!bg-brand-700 !text-white !font-bold",
      isToday &&
        !isSelectedDate &&
        "!font-bold !bg-white !border !border-brand-700"
    );
  };

  return (
    <DatePicker
      selected={selectedDate || value}
      onChange={(date) => {
        onChangeDate(date as Date);
        setValue(date as Date);
      }}
      placeholderText={placeholder}
      closeOnScroll
      popperPlacement="bottom-start"
      showPopperArrow={false}
      renderDayContents={renderDayContents}
      dateFormat={dateFormat}
      filterDate={handleDisabledDate}
      excludeDates={excludeDates}
      minDate={minDate}
      maxDate={maxDate}
      dayClassName={renderDateClassName}
      shouldCloseOnSelect
      readOnly={readOnly}
      icon={
        showTimeSelectOnly ? (
          <div className="flex center gap-1">
            <ClockCircleIcon className="text-grey-1 !size-5" />
            <ArrowDropdownIcon className="!size-3" />
          </div>
        ) : (
          <CalendarIcon className="!size-5" />
        )
      }
      showIcon
      toggleCalendarOnIconClick
      wrapperClassName={cn(
        "focus-visible:outline-none",
        width && `w-[${width}]`,
        isFullWidth && "w-full"
      )}
      calendarIconClassName="right-3 top-1/2 -translate-y-1/2 !w-auto !p-0"
      className={cn(
        "box w-full outline-none h-[46px] !px-3 py-[10px] border-grey-2 hover:border-brand-500 enabled:focus:border-brand-700",
        className,
        error &&
          "border-red-500 hover:border-red-500 enabled:focus:border-red-500"
      )}
      popperClassName="border border-grey-2 rounded-lg shadow-md !-top-2"
      showTimeSelectOnly={showTimeSelectOnly}
      {...rest}
    />
  );
};

export default CustomDatePicker;
