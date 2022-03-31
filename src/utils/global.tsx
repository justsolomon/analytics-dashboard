import { NavLinkMenu, Routes } from 'types/global';
import { ReactComponent as KnowledgeIcon } from 'assets/vectors/checkmark.svg';
import { ReactComponent as HelpIcon } from 'assets/vectors/clock.svg';
import { ReactComponent as AnalyticsIcon } from 'assets/vectors/comment.svg';
import { ReactComponent as InboxIcon } from 'assets/vectors/inbox.svg';
import { ReactComponent as AdminIcon } from 'assets/vectors/users.svg';

export const navLinkMenus: NavLinkMenu[] = [
  { title: 'Admin', icon: <AdminIcon />, links: [] },
  { title: 'Knowledge Base', icon: <KnowledgeIcon />, links: [] },
  { title: 'Train SAM', icon: <KnowledgeIcon />, links: [] },
  { title: 'Agent Inbox', icon: <InboxIcon />, links: [] },
  { title: 'Help Center', icon: <HelpIcon />, links: [] },
  {
    title: 'Analytics',
    icon: <AnalyticsIcon />,
    links: [
      { to: Routes.teams, title: 'Teams' },
      { to: Routes.other, title: 'Knowledge Base' },
      { to: Routes.other, title: 'Training SAM' },
      { to: Routes.other, title: 'Help Center' },
    ],
  },
];
