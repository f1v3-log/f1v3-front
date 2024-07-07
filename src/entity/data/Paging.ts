import type Post from '@/entity/post/Post'

export default class Paging<T> {
    public page = 0
    public size = 0
    public totalCount = 0
    public items: Post[] = []

    setItems(items: Post[]) {
        this.items = items
    }
}