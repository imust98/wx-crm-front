import request from '@/utils/request';

export async function test() {
  return request({
    url: '/api/module/test'
  });
}
