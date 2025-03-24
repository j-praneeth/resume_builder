import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch('https://resunext-ai.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store the token using AsyncStorage
      await AsyncStorage.setItem('token', data.token);
      
      // Navigate to profile page
      router.push('/profile');
    } catch (error) {
      alert((error as Error).message || 'An error occurred during login');
    }
  };
  return (
    <View className={`flex-1 bg-white p-6 ${Platform.OS==='web'?'justify-center items-center ':''}` }>
    <View className={`${Platform.OS==='web'?'w-[600px]':''}`}>
      <View className="mt-10 items-center w-full mb-5 flex-row justify-center">
        <Text className="text-[28px] font-bold text-black leading-none">
          Resu
        </Text>
        <Text className="text-[28px] mt-6 font-bold text-[#6366f1] leading-none">
          Next.ai
        </Text>
      </View>

      <View>
      <Text className="text-xl text-black text-center mt-5">Sign In</Text>

      <Text className="text-base text-[#4B5563] mb-2 mt-2.5">Email</Text>
      <TextInput
        className="border border-[#E5E7EB] rounded-lg p-3 text-base mb-4 w-full"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text className="text-base text-[#4B5563] mb-2 mt-2.5">Password</Text>
      <View className="flex-row items-center border border-[#E5E7EB] rounded-lg mb-4">
        <TextInput
          className="flex-1 p-3 text-base"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity
          className="p-3"
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={24}
            color="#6B7280"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-[#6366F1] rounded-lg p-3.5 items-center mt-2.5 w-full"
        onPress={() => {handleLogin()}}
      >
        <Text className="text-white text-base font-semibold text-center">NEXT</Text>
      </TouchableOpacity>
      </View>
      <View className="flex-row items-center my-5 w-full">
        <View className="flex-1 h-[1px] bg-[#E5E7EB]" />
        <Text className="mx-2.5 text-[#6B7280] text-center min-w-[30px] px-1.5 text-base">Or</Text>
        <View className="flex-1 h-[1px] bg-[#E5E7EB]" />
      </View>

      <View className="flex-row justify-center items-center gap-4">
        <TouchableOpacity className="flex-row items-center justify-start border border-[#E5E7EB] rounded-lg p-3 mb-3">
          <AntDesign name="apple1" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-start border border-[#E5E7EB] rounded-lg p-3 mb-3">
          <AntDesign name="google" size={24} color="#4285F4" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-start border border-[#E5E7EB] rounded-lg p-3 mb-3">
          <AntDesign name="facebook-square" size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-center items-center mt-5 pb-5 px-2.5 py-2.5">
        <Text className="text-[#6B7280] text-base mr-1.5">
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text className="text-[#6366F1] text-base font-extrabold"> Sign Up</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}
