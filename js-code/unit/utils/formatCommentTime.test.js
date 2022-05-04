import { expect, it } from '@jest/globals'
import { formatCommentTime } from '../../utils'
function getFixedTime() {
    const now = new Date(Date.now())
    const nowInfo = {
        nowYear: now.getFullYear(),
        nowMonth: now.getMonth(),
        nowDate: now.getDate()
    }
    const { nowYear, nowMonth, nowDate } = nowInfo
    return new Date(nowYear, nowMonth, nowDate, 8, 0)
}
describe('js-code::formatCommentTime', function () {
    it('should detect formatCommentTime return correct result', () => {
        expect(formatCommentTime('2021-4-5 2:00')).toBe('2021年4月5日 凌晨02:00')
        expect(formatCommentTime('2021-4-5 6:00')).toBe('2021年4月5日 上午06:00')
        expect(formatCommentTime('2021-4-5 11:00')).toBe('2021年4月5日 上午11:00')
        expect(formatCommentTime('2021-4-5 12:00')).toBe('2021年4月5日 中午12:00')
        expect(formatCommentTime('2021-4-5 13:00')).toBe('2021年4月5日 下午13:00')
        expect(formatCommentTime('2022-3-5 18:00')).toBe('3月5日 晚上18:00')
        expect(formatCommentTime('2022-4-9 7:30')).toBe('星期六 上午07:30')
        expect(formatCommentTime('2022-4-5 7:30')).toBe('星期二 上午07:30')
        expect(formatCommentTime('2022-4-4 7:30')).toBe('4月4日 上午07:30')
        expect(formatCommentTime(getFixedTime())).toBe('08:00')
        expect(formatCommentTime(getFixedTime() - 24 * 60 * 60 * 1000)).toBe('昨天 08:00')
    })
})

