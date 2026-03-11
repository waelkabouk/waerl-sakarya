"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ScheduleSection.module.css";
import scheduleData from "@/data/itikaf-times.json";

interface Activity {
  time: string;
  activity: string;
  note: string;
}

interface DaySchedule {
  day: string;
  activities: Activity[];
}

const data = scheduleData as DaySchedule[];

function getInitialDay() {
  const hijriDay = parseInt(
    new Intl.DateTimeFormat("en-u-ca-islamic-civil", { day: "numeric" }).format(new Date()),
    10
  );
  const idx = data.findIndex((d) => d.day.includes(String(hijriDay)));
  return idx !== -1 ? idx : 0;
}

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(getInitialDay);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    if (tabsRef.current) {
      const activeTab = tabsRef.current.children[activeDay] as HTMLElement;
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeDay]);

  const extractDayNumber = (dayStr: string) => {
    const match = dayStr.match(/\d+/);
    return match ? match[0] : dayStr;
  };

  return (
    <section id="schedule" ref={sectionRef} className={styles.schedule}>
      {/* Ambient background */}
      <div className={styles.ambientBg} />

      {/* Section Header */}
      <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
        <p className={styles.subtitle}>معتكف سكاريا الخامس</p>
        <h2 className={styles.title}>البرنامج اليومي</h2>
        <div className={styles.ornament}>
          <div className={styles.ornLine} />
          <span className={styles.ornStar}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73A8.15 8.15 0 0 1 9.08 5.49a8.59 8.59 0 0 1 .25-2 1 1 0 0 0-.35-1 1 1 0 0 0-1.06-.17A10 10 0 1 0 21.92 14a1 1 0 0 0-.28-1Z" />
            </svg>
          </span>
          <div className={styles.ornLine} />
        </div>
      </div>

      {/* Day Tabs — organic pill style */}
      <div className={`${styles.tabsOuter} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.tabs} ref={tabsRef}>
          {data.map((day, index) => {
            const isClickable = index === activeDay;
            return (
              <button
                key={index}
                className={`${styles.tab} ${activeDay === index ? styles.tabActive : ""}`}
                onClick={() => isClickable && setActiveDay(index)}
                disabled={!isClickable}
              >
                <span className={styles.tabNum}>{extractDayNumber(day.day)}</span>
                <span className={styles.tabLabel}>رمضان</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active day heading */}
      <div className={`${styles.dayHeading} ${isVisible ? styles.visible : ""}`}>
        <h3>{data[activeDay].day}</h3>
      </div>

      {/* Activities — organic timeline */}
      <div className={`${styles.timeline} ${isVisible ? styles.visible : ""}`}>
        {data[activeDay].activities.map((activity, index) => (
          <div
            key={`${activeDay}-${index}`}
            className={styles.card}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Time badge */}
            <div className={styles.timeBadge}>
              <span>{activity.time}</span>
            </div>

            {/* Connector */}
            <div className={styles.connector}>
              <div className={styles.dot} />
              {index < data[activeDay].activities.length - 1 && (
                <div className={styles.line} />
              )}
            </div>

            {/* Content card */}
            <div className={styles.cardBody}>
              <p className={styles.activityText}>{activity.activity}</p>
              {activity.note && (
                <span className={styles.noteChip}>{activity.note}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
