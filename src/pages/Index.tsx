
import React from 'react';
import Layout from '../components/Layout';
import IntroductionSection from '../components/home/IntroductionSection';
import FeaturesGrid from '../components/home/FeaturesGrid';
import LatestNewsSection from '../components/news/LatestNewsSection';
import InternationalRecognitionSection from '../components/home/InternationalRecognitionSection';
import PaginationSection from '../components/home/PaginationSection';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <h1 className="text-3xl font-bold text-primary">Bienvenidos a Krav Maga Asturias</h1>
        
        {/* Introduction Section */}
        <IntroductionSection />
        
        {/* Features Grid */}
        <FeaturesGrid />
        
        {/* Latest News Section */}
        <LatestNewsSection />
        
        {/* International Recognition Section */}
        <InternationalRecognitionSection />
        
        {/* Pagination Section */}
        <PaginationSection />
      </div>
    </Layout>
  );
};

export default Index;
