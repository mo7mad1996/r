import React, { useEffect, useState } from "react";
import SectionTitle from "@/sections/common/Products/SectionTitle";
import { Box, Stack, Typography } from "@mui/material";
import {
  ConfirmButton,
  FormItem,
  StyledTextField,
  StyledTypography,
} from "@/components/FormElements";
import axios from "axios";
import { useTranslation } from "react-i18next";

const UserProfilePage = () => {
  const { t } = useTranslation();

  const [userData, setUserData] = useState({
    name: "",
    second_name: "",
    family_name: "",
    phone: "",
    email: "",
    date_of_birth: "",
    apartment_number: "",
    residence_number: "",
    street_name: "",
    city: "",
    governorate: "",
  });

  const [isVerified, setIsVerified] = useState(false);

  const fetchUserProfile = async () => {
    const API_URL = `https://Joumla.store/api/v1/user/profile/show/${localStorage.getItem(
      "userId"
    )}`;
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const data = response.data.user;

      setUserData({
        name: data.name || "",
        second_name: data.second_name || "",
        family_name: data.family_name || "",
        phone: data.phone || "",
        email: data.email || "",
        date_of_birth: data.date_of_birth || "",
        apartment_number: data.apartment_number || "",
        residence_number: data.residence_number || "",
        street_name: data.street_name || "",
        city: data.city || "",
        governorate: data.governorate || "",
      });
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  const handleInputChange = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateUserProfile = async () => {
    const API_URL = `https://Joumla.store/api/v1/user/profile/update/${localStorage.getItem(
      "userId"
    )}`;
    const token = localStorage.getItem("token");

    try {
      const response = await axios.patch(
        API_URL,
        {
          name: userData.name,
          second_name: userData.second_name,
          family_name: userData.family_name,
          phone: userData.phone,
          date_of_birth: userData.date_of_birth,
          governorate: userData.governorate,
          city: userData.city,
          street_name: userData.street_name,
          residence_number: userData.residence_number,
          apartment_number: userData.apartment_number,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("تم تحديث بياناتك بنجاح!");
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
      alert("حدث خطأ أثناء تحديث بياناتك. حاول مرة أخرى.");
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <>
      <SectionTitle sectionTitle={{ main: "الملف الشخصى" }} />
      <Box sx={{ mb: "85px", mx: "auto", width: "fit-content", px: "15px" }}>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "31px",
            color: "colors.website",
            mb: "23px",
          }}
        >
          تفاصيلك{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "26.78px",
            color: "colors.greyLabels",
          }}
        >
          من هنا يمكنك تعديل بياناتك الشخصية عندما تنتهي اضغط علي حفظ .{" "}
        </Typography>
      </Box>
      <Stack
        sx={{
          position: "relative",
          px: { xs: "15px", sm: "45px" },
          gap: { xs: "50px", sm: "104px" },
          width: { lg: "fit-content" },
          mx: { xs: "auto" },
          alignItems: { md: "center", lg: "end" },
        }}
      >
        <FormItem>
          <StyledTypography>{t("First Name")}</StyledTypography>
          <StyledTextField
            value={userData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>{t("Father's Name")}</StyledTypography>
          <StyledTextField
            value={userData.second_name}
            onChange={(e) => handleInputChange("second_name", e.target.value)}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>
            {t("Grandfather's Name or Surname")}
          </StyledTypography>
          <StyledTextField
            value={userData.family_name}
            onChange={(e) => handleInputChange("family_name", e.target.value)}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>{t("Phone Number")}</StyledTypography>
          <StyledTextField
            value={userData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>
            {t("the")}
            {t("email")}
          </StyledTypography>
          <StyledTextField value={userData.email} disabled />
        </FormItem>
        <FormItem>
          <StyledTypography>تاريخ الميلاد</StyledTypography>
          <StyledTextField
            type="date"
            value={userData.date_of_birth}
            onChange={(e) => handleInputChange("date_of_birth", e.target.value)}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>{t("Governorate")}</StyledTypography>
          <StyledTextField
            value={userData.governorate}
            onChange={(e) => handleInputChange("governorate", e.target.value)}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>{t("City")}</StyledTypography>
          <StyledTextField
            value={userData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>{t("Street Name")}</StyledTypography>
          <StyledTextField
            value={userData.street_name}
            onChange={(e) => handleInputChange("street_name", e.target.value)}
          />
        </FormItem>
        <FormItem>
          <StyledTypography>رقم السكن</StyledTypography>
          <StyledTextField
            value={userData.residence_number}
            onChange={(e) =>
              handleInputChange("residence_number", e.target.value)
            }
          />
        </FormItem>
        <FormItem>
          <StyledTypography>{t("Apartment Number")}</StyledTypography>
          <StyledTextField
            value={userData.apartment_number}
            onChange={(e) =>
              handleInputChange("apartment_number", e.target.value)
            }
          />
        </FormItem>
      </Stack>
      <Box
        sx={{
          width: "fit-content",
          mx: "auto",
          mb: "100px",
        }}
      >
        <ConfirmButton
          sx={{
            mt: "168px",
          }}
          onClick={updateUserProfile}
        >
          حفظ
        </ConfirmButton>
      </Box>
    </>
  );
};

export default UserProfilePage;
