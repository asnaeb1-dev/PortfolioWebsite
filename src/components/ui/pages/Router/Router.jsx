import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import IntroductionPage from '../IntroductionPage/IntroductionPage';
import Page404 from '../404Page/Page404';
import App from '../../../../App';
import SkillsPage from '../SkillsPage/SkillsPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import EducationPage from "../EducationPage/EducationPage";
import WorkExperiencePage from "../WorkExperiencePage/WorkExperiencePage";
import { Links } from '../../../data/strings';
import ResumePage from '../ResumePage/ResumePage';

const Router = () => {

    const browserRouter = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <Page404 />,
            children: [
                { path: Links.INTRO, element: <IntroductionPage /> },
                { path: Links.SKILLS, element: <SkillsPage />},
                { path: Links.PROJECTS, element: <ProjectsPage /> },
                { path: Links.EDUCATION, element: <EducationPage /> },
                { path: Links.WORK_EXPERIENCE, element: <WorkExperiencePage /> },
                { path: Links.RESUME, element: <ResumePage /> }
            ]
        }
    ]);
    return <RouterProvider router={browserRouter} />
}

export default Router