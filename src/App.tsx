import './App.css'
import Layout from './components/Layout';
import PortfolioHeader from './components/PortfolioHeader';
import ProjectGrid from './components/ProjectGrid';
import PortfolioFooter from './components/PortfolioFooter';

function App() {
  const imageModules = import.meta.glob('./assets/*', { eager: true, as: 'url' });

  const projects = Object.entries(imageModules)
    .filter(([path]) => !path.endsWith('react.svg'))
    .map(([path, url]) => {
      const fileName = path.split('/').pop()?.split('.')[0] || 'Project';
      return { 
        name: fileName.replace(/_/g, ' '),
        imageUrl: url, 
        pathName: fileName
      };
    });

  return (
    <Layout>
      <PortfolioHeader />
      <main className="portfolio-main">
        <ProjectGrid projects={projects} />
      </main>
      <PortfolioFooter />
    </Layout>
  )
}

export default App