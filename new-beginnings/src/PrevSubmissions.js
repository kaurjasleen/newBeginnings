import React from 'react';
import './Cards.css'
import CardItem from './CardItem';

import './PrevSubmissions.css';

const image1="https://i.pinimg.com/originals/de/f7/21/def7210d0eb8f98ca7c7459f952c4018.jpg"

function PrevSubmissions() {
  return (
    <div className="container">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
          <h4 class="featurette-heading">Web Development</h4>
        <div className='cards__wrapper d-flex justify-content-center bd-highlight mb-3' >
            <div class="p-2 bd-highlight">
              <CardItem
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEU6VZ////81Up0vTZwyT5xgc61+jbuXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5f29/q3v9iHlcDV2umvt9RoerJxgrbd4Ozp6/PHzeHByN5YbatQZ6h2hrhMY6aQnMSGvE5JAAAC3UlEQVR4nO3cWZKjMBBFUVrIEzZ4nqt6/8usqP5vLJDlfEncuwCCE0ZmkKCqiIiIiIiIiIiIiIiIiIjUCyHG+kXReidHF+u2q2Zf+8Wqt/XeJ7Fuw/l4+ZPSobHe2eHFJi4OSbrfNu6EsT3fknkOhbGbX4f4vAlDdx7ocyasq0HHpz9hNx/u8yQMzX0M0I8wLgePQF/C+rEdB/QirE8jfV6EcTzQhzA+xwNdCEM1dgx6EXZpNxF+he0uB+hAGL+ygA6Ebc4g9CDMPEb1heGRCZQXdumPK3wKwywXqC5sNxMXhpzLNRfC5jh1Ye65UF4Yz/lAbWGTe7aXF7YjH824EYblG4DSwrh/h1B57qkeMgy3h93a3fxhk35Nejs1TeNvDrhLPRten22w3tlRxUTgrvPpq8J3GvDeWe/p2BLvnC5uganCpdNDtEoVHoVPd69KEzr+CdOEl9Z6NzNKEh5r693MKEmofE32siThHKFyCBHqhxChfggR6ocQoX4IEeqHEKF+CBHqNw1h6HlFuUlZWvrVvnrT2Rh4WvS0ThDu+jbw28pWWKcgMrOdffuAcGs7RfwBofH02weE98kfpWvbP9MPCPeTF55s5/k/IPyeunBrfE1TXng1XjFVXrgxXo1SXrgzXjJVXriY/Di0vn8sL3wYL3srL7R+BFBcuLVem1lceLVeulhceJv8b2i+OLO48O/k/2nOkxc+rVeBFxdaD8PiQut7p/JC+3cPSwuNHyV+QLia/Di0f1ehtHBmfbIoLrT2FRdaP0osLzS/dyouFPjYQP2Gr7P0tLM/Sqtq2VPK5yDnfVuwxv0r/L+YtNqk7tmCNe5V01hP0xdChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUQ4oB9urELQFCwKGgAAAABJRU5ErkJggg=='
              text='Facebook'
              />
            </div>
            <div class="p-2 bd-highlight">
              <CardItem
              src='data:image/png;base64,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'
              text='Discord'
              />
            </div>
            <div class="p-2 bd-highlight">
              <CardItem
              src='data:image/png;base64,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'
              text='Slack'
              />
            </div>
          </div>
      </li>
      <li className="list-group-item">
        <h4 class="featurette-heading">Mobile Development</h4>
        <div className='cards__wrapper d-flex justify-content-center bd-highlight mb-3' >
            <div class="p-2 bd-highlight">
              <CardItem
              src='data:image/png;base64,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'
              text='Twitter'
              />
            </div>
            <div class="p-2 bd-highlight">
              <CardItem
              src='https://i.pinimg.com/originals/40/21/63/4021636b5d203c1aba86e2643a30b87c.jpg'
              text='TikTok'
              />
            </div>
            <div class="p-2 bd-highlight">
              <CardItem
              src='https://www.hypebot.com/wp-content/uploads/2019/11/instagram.jpg'
              text='Instagram'
              />
            </div>

          </div>
      </li>
      <li className="list-group-item">
      <h4 class="featurette-heading">Data Science</h4>
      <div className='cards__wrapper d-flex justify-content-center bd-highlight mb-3' >
            <div class="p-2 bd-highlight">
              <CardItem
              src='https://www.census.gov/programs-surveys/decennial-census/2020-census/planning-management/promo-print-materials/agreement/_jcr_content/par/textimage.textthumbnail.png/1583616197573.png'
              text='Census Income Data Set'
              />
            </div>
            <div class="p-2 bd-highlight">
              <CardItem
              src='https://cdn.iconscout.com/icon/free/png-256/yelp-35-722661.png'
              text='Yelp Data Set'
              />
            </div>
            <div class="p-2 bd-highlight">
              <CardItem
              src='https://cdn.iconscout.com/icon/premium/png-256-thumb/titanic-2-159349.png'
              text='Titanic Dat Set'
              />
            </div>

          </div>
      </li>
    </ul>
    </div>
  );
}

export default PrevSubmissions;
