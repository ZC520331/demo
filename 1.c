int condition;
void* see_zmalloc(size_t size)
{
    void* ptr;
    if (condition) {
         return 0;
    }
    ptr = __iscan_alloc__(size);
    return ptr;
}
