/**
 * @description 获取oss文件链接
 * @param {string} key 文件key
 * @returns {string} 文件链接
 */
export const getOssLink = (key: string): string => `https://bucket.passnat.com/${key}`
