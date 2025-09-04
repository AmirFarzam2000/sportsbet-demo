import { ReactNode } from 'react';
import { Metadata } from 'next';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Providers from './providers';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isRTL = params.locale === 'fa';

  return {
    title: isRTL ? 'SportsBet - شرط‌بندی ورزشی' : 'SportsBet - Sports Betting',
    description: isRTL
      ? 'بهترین پلتفرم شرط‌بندی ورزشی با ضرایب رقابتی و پوشش گسترده ورزش‌ها'
      : 'The best sports betting platform with competitive odds and comprehensive sports coverage',
    keywords: isRTL
      ? 'شرط‌بندی, ورزش, فوتبال, تنیس, بسکتبال, ضرایب'
      : 'sports betting, football, tennis, basketball, odds, live betting',
    openGraph: {
      title: isRTL
        ? 'SportsBet - شرط‌بندی ورزشی'
        : 'SportsBet - Sports Betting',
      description: isRTL
        ? 'بهترین پلتفرم شرط‌بندی ورزشی'
        : 'The best sports betting platform',
      type: 'website',
      locale: params.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: isRTL
        ? 'SportsBet - شرط‌بندی ورزشی'
        : 'SportsBet - Sports Betting',
      description: isRTL
        ? 'بهترین پلتفرم شرط‌بندی ورزشی'
        : 'The best sports betting platform',
    },
  };
}

export default function MainLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <Providers locale={params.locale}>
      <div suppressHydrationWarning>
        {/* <DynamicI18n locale={params.locale}> */}
        <Header />
        <div className="flex min-h-screen bg-gray-50 dark:bg-[#141414] theme-transition">
          <Sidebar
            title="Sports Categories"
            items={[
              { key: 'football', label: 'Football', icon: '⚽', href: '#' },
              { key: 'tennis', label: 'Tennis', icon: '🎾', href: '#' },
              { key: 'basketball', label: 'Basketball', icon: '🏀', href: '#' },
              { key: 'hockey', label: 'Hockey', icon: '🏒', href: '#' },
              { key: 'volleyball', label: 'Volleyball', icon: '🏐', href: '#' },
              { key: 'handball', label: 'Handball', icon: '🤾', href: '#' },
              { key: 'darts', label: 'Darts', icon: '🎯', href: '#' },
              { key: 'baseball', label: 'Baseball', icon: '⚾', href: '#' },
            ]}
            activeItem="football"
          />
          <main className="flex-1 p-6 lg:p-8 overflow-auto">{children}</main>
        </div>
        <Footer />
        {/* </DynamicI18n> */}
      </div>
    </Providers>
  );
}
