'use client'

import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import { UserProfileType, DeviceType } from "@/types/client";
import {
  AppIcon,
  BookIcon,
  BugIcon,
  ChatIcon,
  ClockIcon,
  LockIcon,
  MobileIcon,
  SettingsIcon,
  TrashIcon,
  UserCardIcon,
  WalletIcon,
} from "@/assets/images/icon";
import Link from "next/link";
import {
  dashboardMenuItems,
  fetchUserDevices,
  fetchUserProfile,
} from "@/service/mockApi";

const Dashboard = () => {
  const [profile, setProfile] = useState<UserProfileType | null>(null);
  const [devices, setDevices] = useState<DeviceType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const profileData = (await fetchUserProfile()) as UserProfileType;
        const devicesData = (await fetchUserDevices()) as DeviceType[];

        setProfile(profileData);
        setDevices(devicesData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "userCard":
        return <UserCardIcon />;
      case "lock":
        return <LockIcon />;
      case "wallet":
        return <WalletIcon />;
      case "clock":
        return <ClockIcon />;
      case "mobile":
        return <MobileIcon />;
      case "app":
        return <AppIcon />;
      case "trash":
        return <TrashIcon />;
      case "settings":
        return <SettingsIcon />;
      case "book":
        return <BookIcon />;
      case "chat":
        return <ChatIcon />;
      case "bug":
        return <BugIcon />;
      default:
        return null;
    }
  };

  if (loading) {
    return <div className={styles.dashboard}>Loading...</div>;
  }

  return (
    <div className={styles.dashboard}>
      {profile && (
        <div className={styles.profileSection}>
          <div className={styles.avatarContainer}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="8" r="4" fill="#9CA3AF" />
              <path
                d="M4 18C4 14.6863 7.58172 12 12 12C16.4183 12 20 14.6863 20 18"
                fill="#9CA3AF"
              />
            </svg>
          </div>
          <h2 className={styles.username}>{profile.name}</h2>
          <p className={styles.email}>{profile.email}</p>
          <p className={styles.balance}>Balance: {profile.balance}</p>
        </div>
      )}

      <div className={styles.menuCard}>
        {dashboardMenuItems
          .filter(item => item.type === "menu")
          .map((item) => (
            <Link href={item.path} key={item.id}>
              <div className={styles.menuItem}>
                <div className={styles.iconContainer}>{getIcon(item.icon)}</div>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={styles.chevron}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
      </div>

      <div className={styles.menuCard}>
        {dashboardMenuItems
          .filter(item => item.type === "action")
          .map((item) => (
            <Link href={item.path} key={item.id}>
              <div className={styles.menuItem}>
                <div className={styles.iconContainer}>{getIcon(item.icon)}</div>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={styles.chevron}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
      </div>

      <h3 className={styles.sectionTitle}>REGISTERED DEVICES</h3>

      <div className={styles.menuCard}>
        {devices.length === 0 ? (
          <div className={styles.emptyDevices}>
            You have not registered any devices.
          </div>
        ) : (
          devices.map((device) => (
            <div key={device.id} className={styles.menuItem}>
              <div className={styles.iconContainer}>
                <MobileIcon />
              </div>
              <span className={styles.itemTitle}>{device.name}</span>
              <span className={styles.chevron}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          ))
        )}
      </div>

      <div className={styles.menuCard}>
        {dashboardMenuItems
          .filter(item => item.type === "settings")
          .map((item) => (
            <Link href={item.path} key={item.id}>
              <div className={styles.menuItem}>
                <div className={styles.iconContainer}>{getIcon(item.icon)}</div>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={styles.chevron}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
