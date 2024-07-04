import { Transform } from 'class-transformer'
import { DateTimeFormatter, LocalDate, LocalDateTime } from '@js-joda/core'

export default class Post {
    public id = 0

    public title = ''

    public content = ''

    @Transform(({ value }) => LocalDateTime.parse(value, DateTimeFormatter.ISO_LOCAL_DATE_TIME))
    public regDate = LocalDateTime.now()

    public getDisplayRegDate() {
        return this.regDate.format(DateTimeFormatter.ofPattern('yyyy년 MM월 dd일 HH시'))
    }

    public getDisplaySimpleRegDate() {
        return this.regDate.format(DateTimeFormatter.ofPattern('yyyy-MM-dd'))
    }

    public getDisplaySimpleContent() {
        return this.content.length > 300 ? this.content.slice(0, 300) + ' ...' : this.content
    }
}
