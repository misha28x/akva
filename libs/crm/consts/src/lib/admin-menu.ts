import { MenuLink } from '../../../../shared/menu-utils/src/lib/models';

export const adminMenu: MenuLink[] = [
  {
    title: 'Головна Панель',
    icon: 'icofont-ui-home',
    routing: 'home',
  },
  {
    title: 'Нові Повірки',
    icon: 'far fa-calendar-plus',
    routing: 'new-verifications',
  },
  {
    title: 'Заявки Лабораторії',
    icon: 'fas fa-flask',
    routing: 'lab-requests',
  },
  {
    title: 'Протоколи',
    icon: 'icofont-file-powerpoint',
    routing: 'verications-protocols',
  },
  {
    title: 'Електроні протоколи',
    icon: 'far fa-file-powerpoint',
    routing: 'metrology',
  },
  {
    title: 'Відхилені Протоколи',
    icon: 'fas fa-file-prescription',
    routing: 'rejected-protocols',
  },
  {
    title: 'Планування Завдання',
    icon: 'icofont-tasks-alt',
    routing: 'tasks-planing',
  },
  {
    title: 'Невиконанні завдання',
    icon: 'far fa-calendar-times',
    routing: 'failed-tasks',
  },
  {
    title: 'Завдання Для Станцій',
    icon: 'icofont-tack-pin',
    routing: 'station-tasks',
  },
  {
    title: 'Відхилені Повірки',
    icon: 'fas fa-ban',
    routing: 'rejected-verification',
  },
  {
    title: 'Архів Повірок',
    icon: 'icofont-archive',
    routing: 'verifications-archive',
  },
  {
    title: 'Звіти',
    icon: 'icofont-file-excel',
    routing: 'reports',
  },
];
