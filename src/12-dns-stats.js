/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  domains.forEach((domainGroup) => {
    const arrDomainGroup = domainGroup.split('.').reverse();
    arrDomainGroup.reduce((sum, domain) => {
      if (!result[`${sum}.${domain}`]) {
        result[`${sum}.${domain}`] = 1;
      } else {
        result[`${sum}.${domain}`]++;
      }
      return `${sum}.${domain}`;
    }, '');
  });
  return result;
}

module.exports = getDNSStats;
