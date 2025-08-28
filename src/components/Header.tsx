import rat from '../files/Google_AI_Studio_2025-08-27T19_36_48.854Z.png';
import ThemePicker from './ThemePicker';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800 py-8 flex flex-col items-center text-center">
      <img src={rat} alt="Virtual Vini Logo" className="w-24 h-24 mb-4" />
      <h1 className="text-4xl font-extrabold text-amber-400 drop-shadow-lg">
        Virtual Vini
      </h1>
      <p className="text-gray-300 text-lg mt-1">Stock Predictions</p>
      <ThemePicker />
    </header>
  );
};

export default Header;
