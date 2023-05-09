import { h } from 'vue';
import { NAvatar, NTag } from 'naive-ui';

export const columns = [
  {
    title: 'id',
    key: 'id',
    width: 100,
  },
  {
    title: '命令名称',
    key: 'name',
    width: 200,
  },
  {
    title: '命令内容',
    key: 'command',
    width: 650,
  },
  {
    title: '状态',
    key: 'status',
    width: 100,
    render(row) {
      return h(
        NTag,
        {
          type: row.status ? 'success' : 'error',
        },
        {
          default: () => (row.status ? '启用' : '禁用'),
        }
      );
    },
  },
  {
    title: '创建时间',
    key: 'date',
    width: 100,
  },
];
