"use client";

import { useState } from "react";
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
import styles from "@/styles/LoginPage.module.scss";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box className={styles["login-container"]}>
      {/* Form Đăng nhập (có thể cuộn) */}
      <Box className={styles["login-form"]}>
        <Typography variant="h4" className={styles.title}>
          Chào mừng bạn đến với UnKeyApp
        </Typography>
        <Typography className={styles.subtitle}>
          Đăng nhập để trải nghiệm kho ứng dụng với hơn 10,000+ ứng dụng
        </Typography>

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

        <Box className={styles.options}>
          <FormControlLabel control={<Checkbox />} label="Ghi nhớ đăng nhập" />
          <Link href="/forgot-password">Quên mật khẩu?</Link>
        </Box>

        <Button
          variant="contained"
          color="primary"
          className={styles["login-button"]}
        >
          Đăng nhập
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
          Bạn chưa có tài khoản?{" "}
          <Link href="/auth/register" className={styles["register-link"]}>
            Đăng ký ngay
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
