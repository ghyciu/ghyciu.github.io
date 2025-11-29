import './Invalid.css';
import StatusInvalidImage from '../../../assets/images/status_invalid.gif';

const Invalid: React.FC = () => {
  return (
    <div className="invalid-root">
      <div className="invalid-message">
        <img src={StatusInvalidImage} alt="work in progress" className="wip-image" />
        <h1>Invalid Page</h1>
        <p>Sorry, you reached a page that shouldn't exist. Please check the URL or go back to the homepage.</p>
        <div className="invalid-message-footnote">
          <a href="https://www.pixiv.net/en/artworks/110280133">Original GIF by Seseren</a>
        </div>
      </div>
    </div>
  );
};

export default Invalid;
