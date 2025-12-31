import type { NavItems } from '@/types/types';

export const useNavItems = () => {
  const { t } = useTranslations();

  const navItems = computed<NavItems[]>(() => [
    {
      label: t('navigation.about'),
      to: '#about',
      icon: 'pi pi-user'
    },
    {
      label: t('navigation.toolkit'),
      to: '#toolkit',
      icon: 'pi pi-wrench'
    },
    {
      label: t('navigation.testimonials'),
      to: '#testimonials',
      icon: 'pi pi-comment'
    },
    {
      label: t('navigation.contact'),
      to: '#contact',
      icon: 'pi pi-envelope'
    }
  ]);

  return { navItems };
};
