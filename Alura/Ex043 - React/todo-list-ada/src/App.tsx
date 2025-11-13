import type React from 'react';
import './styles/global.css';
import './App.css';
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';
import { TasksProvider } from './contexts/TasksContext';

const App: React.FC = () => {

  return (
    <TasksProvider>
      <Header/>
      <Tasks/>
    </TasksProvider>
  )
}

export default App
