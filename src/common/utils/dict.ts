import { OrganizationType } from 'common/types/WaitingTimeHistories'

export const getBgColor = (OrganizationType: OrganizationType) => {
  switch (OrganizationType) {
    case 'M':
      return 'red.300'
    case 'E':
      return 'yellow.200'
    case 'I':
      return 'blue.300'
    case 'C':
      return 'green.300'
    case 'A':
      return 'lightBlue'
    case 'CLUB':
      return 'gray.300'
  }
}

export const getJapaneseName = (OrganizationType: OrganizationType) => {
  switch (OrganizationType) {
    case 'M':
      return '機械工学科'
    case 'E':
      return '電気・電子システム工学科'
    case 'I':
      return '情報工学科'
    case 'C':
      return '環境都市工学科'
    case 'A':
      return '建築学科'
    case 'CLUB':
      return '部活動'
  }
}
