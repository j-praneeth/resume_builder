import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, Image, SafeAreaView, Animated } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


export default function HomePage() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const slideAnim = useState(new Animated.Value(300))[0];

    const toggleMenu = () => {
        const toValue = isMenuOpen ? 300 : 0;
        Animated.timing(slideAnim, {
            toValue,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Disable Header */}
            <Stack.Screen options={{ headerShown: false }} />

            {/* Header */}
            <View className="px-6 py-2 border-b border-gray-200 flex-row justify-between items-center bg-white shadow-sm">
                <View className="flex-row">
                    <Text className="text-2xl font-bold text-black">Resu</Text>
                    <Text className="text-2xl  font-bold text-[#6366f1] mt-[2px]">Next.ai</Text>
                </View>
                <View className="hidden md:flex flex-row items-center space-x-8">
                    <TouchableOpacity className="hover:text-[#6366f1]">
                        <Text className="text-gray-600 font-medium text-base">Templates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="hover:text-[#6366f1]">
                        <Text className="text-gray-600 font-medium text-base">Features</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="hover:text-[#6366f1]">
                        <Text className="text-gray-600 font-medium text-base">Pricing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/login')} className="hover:text-[#6366f1]">
                        <Text className="text-gray-700 font-medium text-base">Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push('/login')}
                        className="px-6 py-2.5 bg-[#6366f1] rounded-lg hover:bg-[#4f46e5] transition-colors">
                        <Text className="text-white font-medium text-base">Get started</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={toggleMenu} className="md:hidden ml-auto">
                    <Ionicons name="menu" size={30} color="#4b5563"/>
                </TouchableOpacity>
            </View>

            {/* Mobile Menu */}
            {Platform.OS !== 'web' && (
                <>
                    <Animated.View
                        className="absolute top-0 right-0 bottom-0 w-72 bg-white shadow-lg z-50 md:hidden"
                        style={{
                            transform: [{ translateX: slideAnim }]
                        }}>
                        <View className="p-6 space-y-6">
                            <View className="pb-6 border-b border-gray-200">
                                <View className="flex-row">
                                    <Text className="text-2xl font-bold text-black">Resu</Text>
                                    <Text className="text-2xl font-bold text-[#6366f1] mt-[2px]">Next.ai</Text>
                                </View>
                                <Text className="text-sm text-gray-500 mt-1">Build your future</Text>
                            </View>
                            <TouchableOpacity className="py-3 border-b border-gray-100 active:bg-gray-50 flex-row items-center space-x-3">
                                <Ionicons name="document-text-outline" size={20} color="#6366f1" />
                                <Text className="text-gray-700 font-medium text-lg px-2">Templates</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="py-3 border-b border-gray-100 active:bg-gray-50 flex-row items-center space-x-3">
                                <Ionicons name="star-outline" size={20} color="#6366f1" />
                                <Text className="text-gray-700 font-medium text-lg px-2">Features</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="py-3 border-b border-gray-100 active:bg-gray-50 flex-row items-center space-x-3">
                                <Ionicons name="pricetag-outline" size={20} color="#6366f1" />
                                <Text className="text-gray-700 font-medium text-lg px-2">Pricing</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="py-3 border-b border-gray-100 active:bg-gray-50 flex-row items-center space-x-3" onPress={() => router.push('/login')}>
                                <Ionicons name="log-in-outline" size={20} color="#6366f1" />
                                <Text className="text-gray-700 font-medium text-lg px-2">Log in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => router.push('/login')}
                                className="mt-4 px-6 py-3 bg-[#6366f1] rounded-xl active:bg-[#4f46e5] flex-row items-center justify-center space-x-2">
                                <Ionicons name="rocket-outline" size={20} color="white" />
                                <Text className="text-white font-semibold text-lg text-center px-2">Get started</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>

                    {/* Overlay */}
                    {isMenuOpen && (
                        <TouchableOpacity
                            className="absolute inset-0 bg-opacity-50 z-40 md:hidden backdrop-blur-sm"
                            onPress={toggleMenu}
                        />
                    )}
                </>
            )}

            <ScrollView 
                className={`flex-1 ${isMenuOpen ? 'blur-sm' : ''}`} 
                showsVerticalScrollIndicator={false}
                style={{
                    filter: isMenuOpen ? 'blur(2px)' : 'none'
                }}
            >
                {/* Hero Section */}
                <View className="px-4 pt-12 pb-8 bg-gradient-to-br from-[#f8fafc] to-white">
                    <View className="max-w-4xl mx-auto text-center px-4">
                        <Text className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
                            The online resume builder getting
                        </Text>
                        <Text className="text-3xl md:text-5xl font-bold mb-6 text-[#6366f1] leading-tight">
                            folks hired by top companies
                        </Text>
                        <Text className="text-gray-600 text-lg md:text-xl leading-7 md:leading-8 mb-8 max-w-2xl mx-auto">
                            Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions.
                        </Text>

                        <View className="flex-row justify-center gap-x-2 mb-8">
                            <TouchableOpacity
                                className="bg-[#6366f1] rounded-lg py-4 px-8 items-center justify-center shadow-lg"
                                onPress={() => router.push('/login')}
                            >
                                <View className="flex-row items-center justify-center">
                                    <Text className="text-white text-lg font-semibold text-center">
                                        Create my resume
                                    </Text>
                                    {/* <Ionicons name="arrow-forward-outline" size={20} color="white" style={{marginLeft: 8}} /> */}
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className="border-2 border-gray-200 rounded-lg space-py-4 px-8 items-center justify-center"
                                onPress={() => router.push('..')}
                            >
                                <Text className="text-gray-700 text-lg font-semibold text-center">
                                    See templates
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View className="flex-row justify-center items-center space-x-8 gap-8">
                            <View className='justify-center items-center'>
                                <Ionicons name="shield-checkmark" size={20} color="#6366f1" />
                                <Text className="text-gray-600 ">Free to try </Text>
                            </View>
                            
                            <View className="justify-center items-center">
                                <MaterialIcons name="speed" size={20} color="#6366f1" />
                                <Text className="text-gray-600">Easy to use </Text>
                            </View>
                            <View className="justify-center items-center">
                                <FontAwesome5 name="crown" size={16} color="#6366f1" />
                                <Text className="text-gray-600">ATS-friendly y</Text>
                            </View>
                        </View>
                    </View>
                </View>


                {/* Resume Templates Showcase */}
                <View className="px-4 py-12 bg-gray-50">
                    <View className="max-w-4xl mx-auto text-center mb-12">
                        <Text className="text-3xl font-bold text-gray-900 mb-4">Professional Resume Templates</Text>
                        <Text className="text-gray-600 text-lg">Choose from our collection of professionally designed templates</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row justifyContents-center alignItems-center gaps-10">
                        {['Professional', 'Creative', 'Modern', 'Simple'].map((template) => (
                            <TouchableOpacity key={template} className="bg-white rounded-xl shadow-md overflow-hidden w-[280px] mr-4 p-4 md:w-72 flex-shrink-0">
                                <View className="h-64 md:h-80 bg-gray-200 p-2 rounded-md" />
                                <View className="p-4">
                                    <Text className="text-base md:text-lg font-semibold">{template}</Text>
                                    <Text className="text-sm md:text-base text-gray-500">Perfect for {template.toLowerCase()} roles</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Features Section */}
                <View className="px-4 py-12">
                    <View className="max-w-2xl mx-2 p-2">
                        <Text className="text-3xl font-bold text-center mb-12">Why choose our Resume Builder?</Text>
                        <View className="space-y-8 gap-4">
                            {[
                                {
                                    icon: 'flash',
                                    title: 'Quick and Easy',
                                    description: 'Create a professional resume in minutes with our intuitive builder'
                                },
                                {
                                    icon: 'document-text',
                                    title: 'ATS-Optimized',
                                    description: 'Our resumes are designed to pass Applicant Tracking Systems'
                                },
                                {
                                    icon: 'brush',
                                    title: 'Customizable Design',
                                    description: 'Personalize fonts, colors, and layout to match your style'
                                }
                            ].map((feature) => (
                                <View key={feature.title} className="flex-row items-center space-x-4 bg-white p-6 rounded-xl shadow-2xl">
                                    <Ionicons name={feature.icon as keyof typeof Ionicons.glyphMap} size={32} color="#6366f1" />
                                    <View>
                                        <Text className="text-xl font-semibold mb-2">{feature.title}</Text>
                                        <Text className="text-gray-600">{feature.description}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Testimonials */}
                <View className="px-4 py-12 bg-gray-200">
                    <View className="max-w-4xl mx-auto">
                        <Text className="text-3xl font-bold text-center mb-12">What our users say</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-6">
                            {[
                                {
                                    name: 'Sarah Johnson',
                                    role: 'Marketing Manager',
                                    text: 'Got my dream job thanks to this amazing resume builder!'
                                },
                                {
                                    name: 'David Chen',
                                    role: 'Software Developer',
                                    text: 'The ATS optimization feature is a game-changer.'
                                },
                                {
                                    name: 'Emily Brown',
                                    role: 'Graphic Designer',
                                    text: 'Beautiful templates and so easy to customize!'
                                }
                            ].map((testimonial) => (
                                <View key={testimonial.name} className="bg-white p-6 rounded-xl shadow-2xl w-80 mr-4">
                                    <Text className="text-gray-600 mb-4">"{testimonial.text}"</Text>
                                    <Text className="font-semibold">{testimonial.name}</Text>
                                    <Text className="text-gray-500">{testimonial.role}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>

                {/* Resume Examples Section */}
                <View className="px-4 py-12 bg-white">
                    <View className="max-w-4xl mx-auto">
                        <Text className="text-3xl font-bold text-center mb-6">Resume Examples by Industry</Text>
                        <Text className="text-gray-600 text-lg text-center mb-12">Get inspired by our collection of resume examples for various industries</Text>
                        <View className="flex-row flex-wrap justify-center gap-6">
                            {[
                                { title: 'Technology', count: '250+ Examples' },
                                { title: 'Healthcare', count: '180+ Examples' },
                                { title: 'Business', count: '200+ Examples' },
                                { title: 'Education', count: '150+ Examples' },
                                { title: 'Creative', count: '120+ Examples' },
                                { title: 'Marketing', count: '160+ Examples' }
                            ].map((industry) => (
                                <TouchableOpacity key={industry.title} className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 w-full md:w-[calc(33.33%-16px)]">
                                    <Text className="text-base md:text-lg font-semibold mb-2">{industry.title}</Text>
                                    <Text className="text-sm md:text-base text-gray-500">{industry.count}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Pricing Section */}
                <View className="px-4 py-12 bg-gray-50">
                    <View className="max-w-4xl mx-auto">
                        <Text className="text-3xl font-bold text-center mb-6">Simple Pricing</Text>
                        <Text className="text-gray-600 text-lg text-center mb-12">Choose the plan that works best for you</Text>
                        <View className="flex-row flex-wrap justify-center gap-6">
                            {[
                                {
                                    title: 'Basic',
                                    price: 'Free',
                                    features: ['1 Resume Template', 'Basic Export Options', 'Limited Customization']
                                },
                                {
                                    title: 'Premium',
                                    price: '$12/month',
                                    features: ['All Templates', 'Priority Support', 'Advanced Customization', 'Multiple Formats']
                                },
                                {
                                    title: 'Professional',
                                    price: '$29/month',
                                    features: ['Everything in Premium', 'Team Collaboration', 'Analytics', 'Custom Branding']
                                }
                            ].map((plan) => (
                                <View key={plan.title} className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 w-full md:w-[calc(33.33%-16px)]">
                                    <Text className="text-lg md:text-xl font-bold mb-2">{plan.title}</Text>
                                    <Text className="text-xl md:text-2xl font-bold text-[#6366f1] mb-4">{plan.price}</Text>
                                    {plan.features.map((feature, index) => (
                                        <View key={index} className="flex-row items-center space-x-2 mb-2">
                                            <Ionicons name="checkmark-circle" size={20} color="#6366f1" />
                                            <Text className="text-gray-600">{feature}</Text>
                                        </View>
                                    ))}
                                    <TouchableOpacity className="mt-6 bg-[#6366f1] rounded-lg py-3">
                                        <View className="flex-row items-center justify-center space-x-2 gap-2">
                                            <Ionicons name="rocket-outline" size={20} color="white" />
                                            <Text className="text-white text-center font-semibold">Get Started</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Career Resources */}
                <View className="px-4 py-12 bg-white mb-8">
                    <View className="max-w-4xl mx-auto">
                        <Text className="text-3xl font-bold text-center mb-6">Career Resources</Text>
                        <Text className="text-gray-600 text-lg text-center mb-12">Expert advice to help you land your dream job</Text>
                        <View className="flex-row flex-wrap justify-center gap-6">
                            {[
                                {
                                    title: 'Resume Writing Guide',
                                    description: 'Learn the essentials of resume writing'
                                },
                                {
                                    title: 'Cover Letter Tips',
                                    description: 'Stand out with compelling cover letters'
                                },
                                {
                                    title: 'Interview Preparation                      ',
                                    description: 'Ace your next job interview'
                                }
                            ].map((resource) => (
                                <TouchableOpacity key={resource.title} className="bg-white border border-gray-200 rounded-xl p-6 w-[calc(33.33%-16px)]">
                                    <Text className="text-lg font-semibold mb-2">{resource.title}</Text>
                                    <Text className="text-gray-600">{resource.description}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Call to Action */}
                <LinearGradient
                    colors={['#6366f1', '#4f46e5']}  // Gradient Background
                    style={{
                        paddingHorizontal: 16,
                        paddingVertical: 50,   // Adjusted padding to move it up
                        borderRadius: 12,
                        alignItems: 'center',
                        marginTop: -30, // Moves the section upward
                    }}
                >
                    <View style={{ maxWidth: 400, alignSelf: 'center' }}>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: 'white',
                            marginBottom: 10,
                            textAlign: 'center'
                        }}>
                            Ready to Build Your Professional Resume?
                        </Text>
                        <Text style={{
                            fontSize: 18,
                            color: 'white',
                            marginBottom: 20,
                            textAlign: 'center'
                        }}>
                            Join millions who've landed their dream jobs using our platform
                        </Text>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'white',
                                borderRadius: 10,
                                paddingVertical: 14,
                                paddingHorizontal: 20,
                                alignSelf: 'center'
                            }}
                            onPress={() => router.push('/login')}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Ionicons name="rocket" size={24} color="#6366f1" style={{ marginRight: 8 }} />
                                <Text style={{ color: '#6366f1', fontSize: 18, fontWeight: 'bold' }}>
                                    Get Started Now
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
}
