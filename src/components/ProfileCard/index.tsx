import React, { useEffect, useState } from "react";
import { Card } from "antd";
import {
  EditOutlined,
  DeleteFilled,
  HeartTwoTone,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { PageLoader } from "../Common";
import styles from "./index.module.scss";

interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: any;
  phone: string;
  website: string;
  company?: any;
}

const ProfileCard = () => {
  const [userInfo, setUserInfo]: any = useState([]);

  useEffect(() => {
    const doAsyncCall = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const userData = await response.json();
      setUserInfo(userData);
    };

    doAsyncCall();
  }, []);

  return (
    <div className={styles.profile} aria-label="Profile information">
      {userInfo?.length ? (
        userInfo.map((user: UserProps) => (
          <div className="w-full md:w-1/4" key={user.id}>
            <Card
              className={styles.profile_card}
              cover={
                <img
                  alt={user.name}
                  src={`https://avatars.dicebear.com/v2/avataaars/${user.name}.svg`}
                  loading="lazy"
                />
              }
              actions={[
                <HeartTwoTone twoToneColor="#fd5856" key="setting" />,
                <EditOutlined key="edit" />,
                <DeleteFilled key="delete" />,
              ]}
            >
              <h2>{user?.name}</h2>
              <label>
                <MailOutlined />
                <a href={`mailto:${user?.email}`}>{user?.email}</a>
              </label>
              <label>
                <PhoneOutlined />
                <a href={`tel:${user?.phone}`}>{user?.phone}</a>
              </label>
              <label>
                <GlobalOutlined />
                <a href={`https://${user?.website}`} target="_blank" rel="noreferrer">
                  {user?.website}
                </a>
              </label>
            </Card>
          </div>
        ))
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default ProfileCard;
