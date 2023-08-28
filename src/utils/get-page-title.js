import defaultSettings from '@/settings'

const title = defaultSettings.title || '上海石化碳足迹监控系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
