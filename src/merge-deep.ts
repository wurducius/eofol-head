type MergeDeepObjectArg = object

const mergeDeep = (...objects: MergeDeepObjectArg[]) => {
  const isObject = (obj: MergeDeepObjectArg) => obj && typeof obj === "object"

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      // @ts-ignore
      const pVal = prev[key]
      // @ts-ignore
      const oVal = obj[key]

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        // @ts-ignore
        prev[key] = oVal ?? pVal
      } else if (isObject(pVal) && isObject(oVal)) {
        // @ts-ignore
        prev[key] = mergeDeep(pVal, oVal)
      } else {
        // @ts-ignore
        prev[key] = oVal
      }
    })

    return prev
  }, {})
}

export default mergeDeep
