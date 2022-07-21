import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonNote, IonPage, IonRippleEffect, IonSegment, IonSegmentButton, IonSpinner, IonTab, IonTabBar, IonTabButton, IonTabs, IonThumbnail, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Tab1.css';
import { JobI } from './types';
import { ellipse, square, briefcaseOutline, menu, warning , flag} from 'ionicons/icons';
import axios from 'axios'

const Tab1: React.FC = () => {
  const [table, setTable] = useState<[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    
    (
      async () => {
        const {data} = await axios.get("https://api-portaljob.herokuapp.com/"+page);
        setTable(data.information);
      }
    )();

  }, [])


  return (
    <IonPage>

      <IonToolbar color='medium'>
        <IonTitle>PORTAL JOB</IonTitle>

        <IonButtons slot='end'>

          <IonChip>
            <IonIcon src={menu} icon='medium'></IonIcon>
            <IonLabel>menu</IonLabel>
          </IonChip>

        </IonButtons>

      </IonToolbar>


      <IonContent>

        <IonList>

          {
            table != null && table.map((job: JobI, index: number) => (
              <IonCard key={index}>
                <IonItem color='light'>
                  <IonIcon src={briefcaseOutline} className='ion-padding-end' color='danger'></IonIcon>
                  <IonLabel>{job.title}</IonLabel>

                  {
                    job.flag && <IonIcon src={warning} color='danger'></IonIcon>
                  }
                </IonItem>

                <IonCardContent>
                  <p>{job.description}</p>
                </IonCardContent>

              </IonCard>
            ))
          }

        </IonList>
        <IonSpinner name='lines'/>

      </IonContent>


    </IonPage>
  );
};

export default Tab1;
