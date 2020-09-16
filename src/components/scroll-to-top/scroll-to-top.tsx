import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';


const ToTop = ({ history }) => {

        useEffect(() => { 
            history.listen( () => window.scrollTo(0, 0) ); 
        }, []);
  
        return (null);
    }

export const ScrollToTop = withRouter(ToTop);
