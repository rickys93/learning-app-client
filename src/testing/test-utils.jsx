import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserContext, PopupContext } from '../App';

function render(ui, { user = {}, popup = {}, ...options } = {}) {
  const userValue = { user, setUser: () => {} };
  const popupValue = { openPopup: () => {}, closePopup: () => {}, setPopupContent: () => {}, ...popup };
  return rtlRender(
    <BrowserRouter>
      <UserContext.Provider value={userValue}>
        <PopupContext.Provider value={popupValue}>
          {ui}
        </PopupContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>,
    options
  );
}

export { render };
