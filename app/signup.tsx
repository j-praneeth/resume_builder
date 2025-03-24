import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSign = async () => {
    if (!email || !password || !confirmpassword || !name) {
      alert("Please fill in all fields");
      return; 
    } 
    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return; 
    }
    try {
      const response = await fetch("https://resunext-ai.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            name: name,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Store the token using AsyncStorage
      await AsyncStorage.setItem('token', data.token);
      
      console.log("Signup successful:", data);
      router.push("/profile");
    }
    catch (error) {
      console.error(error);
      alert((error as Error).message || "An error occurred while signing up");
      return;
    }
  }

  return (
    <View className={`flex-1 bg-white p-5 pb-10 ${Platform.OS==="web"?'justify-center items-center ':'justify-center'}`}>
      <View className={`${Platform.OS==="web"?'w-[600px]':''} justify-center`} >
        {/* Title */}
      <View className={`flex-row justify-center items-center mt-5 w-full mb-5`}>
        <Text className="text-[28px] font-bold text-black leading-none">
          Resu
        </Text>
        <Text className="text-[28px] font-bold mt-4 text-[#6366f1] leading-none">
          Next.ai
        </Text>
      </View>
      
      {/* form */}
      <View className={`flex justify-center`}>
        <Text className="text-xl  text-black text-center">Sign Up</Text>
        <Text className="text-base text-[#4B5563] mb-2 mt-2.5">Name</Text>
        <TextInput
          className="border border-[#E5E7EB] rounded-lg p-3 text-base mb-4 w-full"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          keyboardType="default"
          autoCapitalize="words"
        />

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
        <TextInput
          className="border border-[#E5E7EB] rounded-lg p-3 text-base mb-4 w-full"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        <Text className="text-base text-[#4B5563] mb-2 mt-2.5">Confirm Password</Text>
        <TextInput
          className="border border-[#E5E7EB] rounded-lg p-3 text-base mb-4 w-full"
          placeholder="Confirm your password"
          value={confirmpassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        <TouchableOpacity className="bg-[#6366F1] rounded-lg p-3.5 items-center mt-2.5 w-full"  onPress={()=>handleSign()}>
          <Text className="text-white text-base font-semibold text-center">NEXT</Text>
        </TouchableOpacity>

        
      </View>

      {/* or tag */}
      <View className="flex-row items-center my-5 w-full">
          <View className="flex-1 h-[1px] bg-[#E5E7EB]" />
          <Text className="mx-2.5 text-[#6B7280] text-center min-w-[30px] px-1.5 text-base">Or</Text>
          <View className="flex-1 h-[1px] bg-[#E5E7EB]" />
        </View>

        {/* Other Options */}
        <View className="flex-row justify-center gap-8">
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

        {/* Alredy have account */}
        <View className="flex-row justify-center items-center mt-5 pb-5 px-2.5 py-2.5">
          <Text className="text-[#6B7280] text-base mr-1.5">
            Already have an account?{" "}
          </Text>
          <Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
              <Text className="text-[#6366F1] text-center mt-0 text-base font-extrabold"> Sign In</Text>
            </TouchableOpacity>
            </Text>
        </View>
      </View>
    </View>
  );
}
