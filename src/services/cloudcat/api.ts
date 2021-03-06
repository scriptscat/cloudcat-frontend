// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取当前的用户 GET /api/v1/user */
export async function currentUser(options?: { [key: string]: any }) {
  return new Promise<API.ApiResponse<API.UserInfo>>(async (resolve, reject) => {
    let ret = await request<API.ApiResponse<API.UserInfo>>('/api/v1/user', {
      method: 'GET',
      ...(options || {}),
    });
    if (ret.code === 0) {
      return resolve(ret);
    } else {
      reject(ret.msg);
    }
  });
}

/** 退出登录接口 GET /api/v1/account/logout */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/v1/account/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/v1/account/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.ApiResponse<undefined>>('/api/v1/account/login', {
    method: 'POST',
    requestType: 'form',
    data: body,
    ...(options || {}),
  });
}

/** 注册接口 POST /api/v1/account/register */
export async function register(body: API.LoginParams) {
  return request<API.ApiResponse<undefined>>('/api/v1/account/register', {
    method: 'POST',
    requestType: 'form',
    data: body,
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
