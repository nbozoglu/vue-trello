import { uuid } from './utils'

export default {
  name: 'PacePoint',
  columns: [
    {
      name: 'TODO',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'and third',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'In Progress',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'Done',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
}
