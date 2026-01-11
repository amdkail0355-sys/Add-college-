
export enum UserRole {
  GUEST = 'GUEST',
  BRAND = 'BRAND',
  CREATOR = 'CREATOR',
  ADMIN = 'ADMIN'
}

export interface Sponsorship {
  id: string;
  brandName: string;
  brandLogo: string;
  title: string;
  description: string;
  budget: string;
  platform: 'Instagram' | 'YouTube' | 'TikTok' | 'X';
  niche: string;
  verified: boolean;
  postedAt: string;
  status?: 'pending' | 'approved' | 'rejected';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'BRAND' | 'CREATOR';
  status: 'pending' | 'verified' | 'suspended';
  joinedAt: string;
}

export interface Application {
  id: string;
  sponsorshipId: string;
  creatorName: string;
  creatorAvatar: string;
  status: 'pending' | 'accepted' | 'rejected';
  pitch: string;
  appliedAt: string;
}

export interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
}
