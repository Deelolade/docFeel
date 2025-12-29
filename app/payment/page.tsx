"use client";
import React, { useState } from 'react';
import { Check, FileText, Loader2, MessageSquare, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

type PricingCardProps = {
    plan: any
    isPopular?: boolean
    onSubscribe: () => void
    loading: boolean
    isFree?: boolean
}
const PricingCard = ({ plan, isPopular, onSubscribe, loading, isFree }: PricingCardProps) => {
    return (
        <div className={`relative rounded-2xl p-4 lg:p-8 ${isPopular
            ? 'bg-linear-to-br from-gray-600 to-slate-900 text-white shadow-2xl scale-105'
            : 'bg-white border-2 border-gray-200'
            }`}>
            {isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                    </span>
                </div>
            )}

            <div className="text-center mb-4 lg:mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${!isPopular && 'text-gray-900'}`}>
                    {plan.name}
                </h3>
                <p className={`text-sm ${isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                </p>
            </div>

            <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                    {isFree ? (
                        <span className={`text-3xl lg:text-5xl font-bold ${!isPopular && 'text-gray-900'}`}>
                            Free
                        </span>
                    ) : (
                        <>
                            <span className={`text-3xl lg:text-5xl font-bold ${!isPopular && 'text-gray-900'}`}>
                                ₦{plan.price.toLocaleString()}
                            </span>
                            <span className={`ml-2 ${isPopular ? 'text-blue-100' : 'text-gray-600'}`}>
                                /{plan.period}
                            </span>
                        </>
                    )}
                </div>
            </div>

            <ul className="space-y-4 mb-8">
                {plan.features.map((feature:string, index:string) => (
                    <li key={index} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 shrink-0 ${isPopular ? 'text-blue-200' : 'text-green-500'
                            }`} />
                        <span className={`text-sm ${!isPopular && 'text-gray-700'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            <button
                onClick={() => onSubscribe()}
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${isPopular
                    ? 'bg-white text-slate-900 hover:bg-gray-100'
                    : isFree
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                    </>
                ) : (
                    isFree ? 'Get Started Free' : 'Upgrade Now'
                )}
            </button>
        </div>
    );
};

export default function PricingPage() {
    const [loading, setLoading] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const router = useRouter();
    const plans = [
        {
            id: 'free',
            name: 'Free',
            description: 'Try DocFeel with basic features',
            price: 0,
            period: 'forever',
            credits: 10,
            pdfCost: 5,
            messageCost: 1,
            features: [
                '10 Credits to start',
                'Upload up to 2 PDFs',
                'Basic AI chat',
                'Standard processing speed',
                'Community support'
            ],
            isFree: true
        },
        {
            id: 'premium',
            name: 'Premium',
            description: 'For regular users',
            price: 2500,
            period: 'month',
            credits: 200,
            pdfCost: 5,
            messageCost: 1,
            features: [
                '200 Credits monthly',
                'Upload up to 40 PDFs',
                'Unlimited AI conversations',
                'Priority processing',
                'Advanced PDF analysis',
                'Export chat history',
                'Priority support',
                'No ads'
            ],
            isPopular: true
        }
    ];


    const handleSubscribe = async () => {
        router.push('/payment/checkout');
    }
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 lg:mb-16">
                    <h1 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Choose Your Plan
                    </h1>
                    <p className="text-sm lg:text-xl text-gray-600 max-w-2xl mx-auto">
                        Start free or upgrade to Premium for just ₦2,500/month
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-20 lg:gap-8 max-w-4xl mx-auto">
                    {plans.map((plan) => (
                        <PricingCard
                            key={plan.id}
                            plan={plan}
                            isPopular={plan.isPopular}
                            onSubscribe={handleSubscribe}
                            loading={loading && selectedPlan === plan.id}
                            isFree={plan.isFree}
                        />
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-16 max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                        How Credits Work
                    </h3>
                    <div className="space-y-4 text-gray-700">
                        <div className="flex items-start">
                            <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1 shrink-0" />
                            <div>
                                <p className="font-semibold">PDF Upload (5 credits)</p>
                                <p className="text-sm text-gray-600">
                                    Each PDF you upload and process costs 5 credits. We extract text, analyze structure, and prepare it for AI chat.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MessageSquare className="w-6 h-6 text-blue-600 mr-3 mt-1 shrink-0" />
                            <div>
                                <p className="font-semibold">AI Chat (1 credit per message)</p>
                                <p className="text-sm text-gray-600">
                                    Each question you ask the AI about your document costs 1 credit. Get instant answers, summaries, and insights.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Zap className="w-6 h-6 text-yellow-500 mr-3 mt-1 shrink-0" />
                            <div>
                                <p className="font-semibold">Example Usage</p>
                                <p className="text-sm text-gray-600">
                                    Premium plan (200 credits) = 10 PDFs + 150 chat messages, or 20 PDFs + 100 messages, or 40 PDFs with basic queries.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 text-center space-y-4">
                    <p className="text-gray-600">
                        All plans include a 14-day money-back guarantee
                    </p>
                    <p className="text-gray-600">
                        Need help choosing? {' '}
                        <a href="/contact" className="text-slate-600 hover:underline font-semibold">
                            Contact us
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}