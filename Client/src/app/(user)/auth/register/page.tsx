"use client";

import { useState } from "react";
import { LeftOutlined } from '@ant-design/icons';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Divider,
} from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/RegisterPage.module.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box className={styles["login-container"]}>
      {/* Form Đăng nhập (có thể cuộn) */}
      <Box className={styles["login-form"]}>
        <div style={{display: "flex", alignItems: "center"}}>
        <Link href="/auth/login" style={{display: "flex", alignItems: "center"}}>
            <LeftOutlined className={styles.icon}/>
        </Link>
        <Typography variant="h4" className={styles.title}>
          Đăng kí 
        </Typography>
        </div>

        <TextField
          label="Địa chỉ email"
          variant="outlined"
          className={styles.inputField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Mật khẩu"
          variant="outlined"
          type="password"
          className={styles.inputField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Nhập lại mật khẩu"
          variant="outlined"
          type="password"
          className={styles.inputField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Box className={styles.options}>
          <FormControlLabel control={<Checkbox />} label="Tôi đồng ý với" />
          <Link href="/forgot-password">chính sách và thoả thuận</Link>
        </Box>

        <Button
          variant="contained"
          color="primary"
          className={styles["login-button"]}
        >
          Đăng kí
        </Button>

        <Divider sx={{ width: "100%", my: 3, fontSize: "14px" }}>Hoặc</Divider>

        <Button variant="outlined" className={styles["google-login"]}>
          <Image
            src="https://www.unkeyapp.com/svg/google.svg"
            alt="Google"
            width={20}
            height={20}
            className={styles.googleIcon}
          />
          Đăng nhập bằng Google
        </Button>

        <Typography className={styles.register}>
          Bạn đã có tài khoản?{" "}
          <Link href="/auth/register" className={styles["register-link"]}>
            Đăng nhập
          </Link>
        </Typography>
      </Box>

      {/* Hình ảnh cố định, không bị cuộn */}
      <Box className={styles["login-image"]}>
        <Image
          src="https://www.unkeyapp.com/images/bg_phone_vi.png"
          layout="fill"
          objectFit="contain"
          alt="App Preview"
        />
      </Box>
    </Box>
  );
}
