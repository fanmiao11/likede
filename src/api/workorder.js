import request from "@/utils/request";

/**
 * 获取工单
 * @param {Object} params 
 * @returns Promise
 */
export function getWorkOrders(params) {
  return request({
    url: "/api/task-service/task/search",
    params,
  });
}
