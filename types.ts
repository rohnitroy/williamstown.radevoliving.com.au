import React from 'react';

export interface TimelineItem {
    id: number;
    status: 'completed' | 'upcoming';
    title: string;
    date: string;
}

export interface ResidenceFeature {
    icon: React.ReactNode;
    text: string;
}

export interface FormData {
    name: string;
    email: string;
    phone: string;
    type: 'Live' | 'Invest';
    message: string;
}