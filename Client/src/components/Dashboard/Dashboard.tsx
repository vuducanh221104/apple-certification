"use client";

import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import { UserProfileType, DeviceType } from "@/types/client";
import {
  SignAppIcon,
  UserGuidesIcon,
  HistoryIcon,
  PasswordIcon,
  AddDeviceIcon,
  SettingsIcon,
  RecycleIcon,
  UserInfomation,
  TopUpIcon,
  ChatGuidesIcon,
  BugIcon,
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
        return <UserInfomation />;
      case "lock":
        return <PasswordIcon />;
      case "wallet":
        return <TopUpIcon />;
      case "clock":
        return <HistoryIcon />;
      case "mobile":
        return <AddDeviceIcon />;
      case "app":
        return <SignAppIcon />;
      case "trash":
        return <RecycleIcon />;
      case "settings":
        return <SettingsIcon />;
      case "book":
        return <UserGuidesIcon />;
      case "chat":
        return <ChatGuidesIcon />;
      case "bug":
        return <BugIcon />;
      default:
        return null;
    }
  };

  if (loading) {
    return <div className={styles.dashboard}>Loading...</div>;
  }

  const getIconContainerClass = (id: number) => {
    switch (id) {
      case 5:
        return styles.bgBlue;
      case 6:
        return styles.bgDellBic;
      case 7:
        return styles.bgWhite;
      case 9:
        return styles.bgGreen;
      case 10:
        return styles.bgPurple;
      case 11:
        return styles.bgRedOrange;
      default:
        return styles.bgDefault;
    }
  };

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
      {/* 1 */}
      <div className={styles.menuCard}>
        {dashboardMenuItems
          .filter((item) => item.type === "menu")
          .map((item) => (
            <Link href={item.path} key={item.id}>
              <div className={styles.menuItem}>
                <div
                  className={`${styles.iconContainer} ${getIconContainerClass(
                    item.id
                  )}`}
                >
                  {getIcon(item.icon)}
                </div>
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
      {/* 2 */}
      <div className={styles.menuCard}>
        {dashboardMenuItems
          .filter((item) => item.type === "action")
          .map((item) => (
            <Link href={item.path} key={item.id}>
              <div className={styles.menuItem}>
                <div
                  className={`${styles.iconContainer} ${getIconContainerClass(
                    item.id
                  )}`}
                >
                  {getIcon(item.icon)}
                </div>
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

      {/* 3 */}
      <h3 className={styles.sectionTitle}>REGISTERED DEVICES</h3>
      <div className={styles.menuCard}>
        {devices.length === 0 ? (
          <div className={styles.emptyDevices}>
            You have not registered any devices.
          </div>
        ) : (
          devices.map((device) => (
            <div key={device.id} className={styles.menuItem}>
              <div>
                <RecycleIcon />
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

        {/* Dashboard Menu Items - type: delete */}
        {dashboardMenuItems
          .filter((item) => item.type === "delete")
          .map((item) => (
            <Link href={item.path} key={item.id}>
              <div className={styles.menuItem}>
                <div
                  className={`${styles.iconContainer} ${getIconContainerClass(
                    item.id
                  )}`}
                >
                  {getIcon(item.icon)}
                </div>
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

      {/* 4 */}
      {/* 4 */}
      <div className={styles.menuCard}>
        {dashboardMenuItems
          .filter((item) => item.type === "settings")
          .map((item) => {
            const icon = (
              <div
                className={`${styles.iconContainer} ${getIconContainerClass(
                  item.id
                )}`}
              >
                {getIcon(item.icon)}
              </div>
            );

            const content = (
              <>
                {icon}
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
              </>
            );

            // Special behavior
            if (item.title === "Report Bug") {
              return (
                <div
                  key={item.id}
                  className={styles.menuItem}
                  onClick={() => alert("Tinh năng chưa được cập nhập")}
                  style={{ cursor: "pointer" }}
                >
                  {content}
                </div>
              );
            }

            if (item.title === "Contact Admin") {
              return (
                <div
                  key={item.id}
                  className={styles.menuItem}
                  onClick={() => window.open("https://facebook.com", "_blank")}
                  style={{ cursor: "pointer" }}
                >
                  {content}
                </div>
              );
            }

            // Default behavior
            return (
              <Link href={item.path} key={item.id}>
                <div className={styles.menuItem}>{content}</div>
              </Link>
            );
          })}
      </div>

      {/* Button */}
      <div className={styles.buttonContainer}>
        <button className={styles.button}>LOg out</button>
      </div>
    </div>
  );
};

export default Dashboard;
