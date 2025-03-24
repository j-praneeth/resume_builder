import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
// import { Link } from 'expo-router';
import { AntDesign, Ionicons } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.container}>
            <View className="flex-row justify-center items-center" style={styles.header}>
                <Text className="text-3xl font-bold text-black" style={styles.logo}>Resu</Text>
                <Text className="text-3xl font-bold text-[#6366f1] mt-[4px]" style={styles.logoFlex}>Next.ai</Text>
            </View>


            {/* <View style={styles.header}>
                <Text style={styles.logo}>
                    Resu<Text style={[styles.logoFlex]}>Next.ai</Text>
                </Text>
            </View> */}

            <Text style={styles.signInText}>Sign In</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Ionicons
                        name={showPassword ? "eye-outline" : "eye-off-outline"}
                        size={24}
                        color="#6B7280"
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/homepage')}>
                <Text style={styles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>Or</Text>
                <View style={styles.dividerLine} />
            </View>


            <TouchableOpacity style={styles.socialButton}>
                <AntDesign name="apple1" size={24} color="black" />
                <Text style={styles.socialButtonText}>Continue with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
                <AntDesign name="google" size={24} color="#4285F4" />
                <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
                <AntDesign name="facebook-square" size={24} color="#1877F2" />
                <Text style={styles.socialButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>

            <View style={styles.accountSection}>
                <Text style={styles.accountText}>
                    Already have an account?{" "}
                    <TouchableOpacity onPress={() => router.push('/signup')}>
                        <Text style={styles.signUpLinkText}>    Sign Up</Text>
                    </TouchableOpacity>
                </Text>
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        padding: 20,
        paddingBottom: 60, // Increased padding at bottom
    },
    header: {
        marginTop: 40,
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    logo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        includeFontPadding: false,
        textAlignVertical: 'center',
    },
    logoFlex: {
        color: '#6366F1',
        includeFontPadding: false,
        textAlignVertical: 'center',
    },
    signInText: {
        fontSize: 20,
        marginTop: 20,
        color: '#000',
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        color: '#4B5563',
        marginBottom: 8,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 16,
        width: '100%',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        marginBottom: 16,
    },
    passwordInput: {
        flex: 1,
        padding: 12,
        fontSize: 16,
    },
    eyeIcon: {
        padding: 12,
    },
    nextButton: {
        backgroundColor: '#6366F1',
        borderRadius: 8,
        padding: 14,
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E7EB',
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#6B7280',
        textAlign: 'center',
        minWidth: 30,
        paddingHorizontal: 5,
        fontSize: 16
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        width: '100%',
    },
    socialButtonText: {
        marginLeft: 12,
        fontSize: 16,
        color: '#000',
        flex: 1,
    },
    accountSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    accountText: {
        color: '#6B7280',
        fontSize: 16,
        marginRight: 6,
    },
    signUpLink: {
        // Link component styles
    },
    signUpLinkText: {
        color: '#6366F1',
        fontSize: 16,
        fontWeight: '800',
    },
});