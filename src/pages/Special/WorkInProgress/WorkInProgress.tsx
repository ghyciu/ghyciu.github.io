import './WorkInProgress.css';
import StatusWIPImage from '../../../assets/images/status_wip.gif';

const WorkInProgress: React.FC = () => {
  return (
    <div className="wip-root">
      <div className="wip-message">
        <img src={StatusWIPImage} alt="work in progress" className="wip-image" />
        <h1>Work In Progress</h1>
        <p>
          <b>This is not an error!</b> You reached a valid page link but it's still under construction. Please come back later!
        </p>
        <div className="wip-message-footnote">
          <a href="https://www.pixiv.net/en/artworks/108675102">Original GIF by Seseren</a>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgress;
