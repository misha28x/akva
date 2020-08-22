import { MenuLink } from '@akva/shared/menu';

export const adminMenu: MenuLink[] = [
  {
    title: 'Заявки Лабораторії',
    icon: 'experiment',
    routing: 'lab-requests',
    counter: 10
  },
  {
    title: 'Протоколи',
    icon: 'file-ppt',
    routing: 'verications-protocols',
  },
  {
    title: 'Відхилені Протоколи',
    icon: 'file-exclamation',
    routing: 'rejected-protocols',
  },
  {
    title: 'Планування Завдання',
    icon: 'calendar',
    routing: 'tasks-planing',
    counter: 20
  },
  {
    title: 'Завдання Для Станцій',
    icon: 'pushpin',
    routing: 'station-tasks',
  },
  {
    title: 'Відхилені Повірки',
    icon: 'close-circle',
    routing: 'rejected-verification',
  },
  {
    title: 'Архів Повірок',
    icon: 'inbox',
    routing: 'verifications-archive',
  },
  {
    title: 'Звіти',
    icon: 'file-text',
    routing: 'reports',
  },
];
