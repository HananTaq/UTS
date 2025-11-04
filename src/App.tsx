import './App.css'
import Layout from './components/Layout';
import ProjectHeader from './components/ProjectHeader';
import ProjectGrid from './components/ProjectGrid';
import ProjectFooter from './components/ProjectFooter';

function App() {
  const imageModules = import.meta.glob('./assets/*', { eager: true, as: 'url' });

  const projects = Object.entries(imageModules)
    .filter(([path]) => !path.endsWith('react.svg'))
    .map(([path, url]) => {
      const fileName = path.split('/').pop()?.split('.')[0] || 'Project';
      const slug = fileName.replace(/_/g, ' ').toLowerCase().replace(/\s+/g, '-');
      return { 
        name: fileName.replace(/_/g, ' '),
        imageUrl: url, 
        pathName: slug
      };
    });

  return (
    <Layout>
      <ProjectHeader />
      <main className="project-main">
        <ProjectGrid projects={projects} />
      </main>
      <ProjectFooter />
    </Layout>
  )
}

export default App