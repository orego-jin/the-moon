import { useEffect, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Album from './components/Album';
import Status from './components/Status';
import Records from './components/Records';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import { main } from './styles/Themes';

function App() {

  const [selectedSlide, setSelectedSlide] = useState(null);

  return (
    < >
    <GlobalStyles />
      <ThemeProvider theme={main}>
        <Navigation />
        <Home setSelectedSlide={setSelectedSlide}/>
        <Album selectedSlide={selectedSlide}/>
        <Status />
        <Records />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
