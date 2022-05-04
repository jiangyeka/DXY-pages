/**
 * @description 时间转换函数
 * @param {number|string} time 
 * @return {string} 返回跟微信消息格式一致的时间戳
 * @category 通用
 */
export function formatCommentTime(time) {
    const now = new Date()
    const nowInfo = {
        nowYear: now.getFullYear(),
        nowMonth: now.getMonth() + 1,
        nowDate: now.getDate()
    }
    const { nowYear, nowMonth, nowDate } = nowInfo
    const source = time instanceof Date ? time : new Date(time)
    const timeInfo = {
        year: source.getFullYear(),
        month: source.getMonth() + 1,
        date: source.getDate(),
        week: source.getDay(),
        hour: source.getHours(),
        minute: source.getMinutes()
    }
    const { year, month, date, week, hour, minute } = timeInfo
    const getPart = (hour) => {
        if (hour < 12) {
            if (hour >= 6) return '上午'
            else return '凌晨'
        } else {
            if (hour === 12) return '中午'
            else {
                if (hour < 18) return '下午'
                else return '晚上'
            }
        }
    }
    const partStr = getPart(hour)
    const weeks = ['日', '一', '二', '三', '四', '五', '六']
    const wPart = `星期${weeks[week]}`
    const hPart = hour.toString().padStart(2, '0')
    const mPart = minute.toString().padStart(2, '0')

    if (year < nowYear) {
        return `${year}年${month}月${date}日 ${partStr}${hPart}:${mPart}`
    } else {
        if (nowMonth === month && Math.abs(nowDate - date) < 7) {
            if (Math.abs(nowDate - date) === 1) return `昨天 ${hPart}:${mPart}`
            if (nowDate === date) return `${hPart}:${mPart}`
            return `${wPart} ${partStr}${hPart}:${mPart}`
        } else
            return `${month}月${date}日 ${partStr}${hPart}:${mPart}`
    }

}

/**
 * @description 时间转换函数（策略模式版）
 * @param {number|string} time 
 * @return {string} 返回跟微信消息格式一致的时间戳
 * @category 通用
 */
export function newFormatCommentTime(time) {
    const strategies = {
        today: function (time) {
            return `${time.hPart}:${time.mPart}`
        },
        yesterday: function (time) {
            return `昨天 ${time.hPart}:${time.mPart}`
        },
        curWeek: function (time) {
            const weeks = ['日', '一', '二', '三', '四', '五', '六']
            return `星期${weeks[time.getDay()]} ${time.getNoonPart(source.getHours())}${time.hPart}:${time.mPart}`
        },
        curYear: function (time) {
            return `${time.getMonth() + 1}月${time.getDate()}日 ${time.getNoonPart(source.getHours())}${time.hPart}:${time.mPart}`
        },
        pastYear: function (time) {
            return `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDate()}日 ${time.getNoonPart(source.getHours())}${time.hPart}:${time.mPart}`
        }
    }
    const source = time instanceof Date ? time : new Date(time)
    const getType = (source) => {
        const now = new Date()
        if (source.getFullYear() < now.getFullYear()) return 'pastYear'
        else {
            const absRes = Math.abs(source.getDate() - now.getDate())
            if (source.getMonth() === now.getMonth()) {
                if (absRes === 0) return 'today'
                if (absRes === 1) return 'yesterday'
                if (absRes > 1 && absRes < 7) return 'curWeek'
            } else return 'curYear'
        }
    }
    source.mPart = source.getMinutes().toString().padStart(2, '0')
    source.hPart = source.getHours().toString().padStart(2, '0')
    source.getNoonPart = (h) => {
        if (h < 12) {
            if (h >= 6) return '上午'
            else return '凌晨'
        } else {
            if (h === 12) return '中午'
            else {
                if (h < 18) return '下午'
                else return '晚上'
            }
        }
    }
    return strategies[getType(source)](source)
}

