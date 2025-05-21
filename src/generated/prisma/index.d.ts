
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model Featured
 * 
 */
export type Featured = $Result.DefaultSelection<Prisma.$FeaturedPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StoreCategory: {
  SUSHI: 'SUSHI',
  UNAGI: 'UNAGI',
  TEMPURA: 'TEMPURA',
  TONKATSU: 'TONKATSU',
  YAKITORI: 'YAKITORI',
  SUKIYAKI: 'SUKIYAKI',
  SOBA: 'SOBA',
  RAMEN: 'RAMEN',
  YAKISOBA: 'YAKISOBA',
  OKONOMIYAKI: 'OKONOMIYAKI',
  DONBURI: 'DONBURI',
  ODEN: 'ODEN',
  KAISEKI: 'KAISEKI',
  HAMBAGU: 'HAMBAGU',
  TEPPANYAKI: 'TEPPANYAKI',
  CURRY: 'CURRY',
  YAKINIKU: 'YAKINIKU',
  NABE: 'NABE',
  CAFE: 'CAFE',
  IZAKAYA: 'IZAKAYA',
  OTHER: 'OTHER'
};

export type StoreCategory = (typeof StoreCategory)[keyof typeof StoreCategory]

}

export type StoreCategory = $Enums.StoreCategory

export const StoreCategory: typeof $Enums.StoreCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Restaurants
 * const restaurants = await prisma.restaurant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Restaurants
   * const restaurants = await prisma.restaurant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featured`: Exposes CRUD operations for the **Featured** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Featureds
    * const featureds = await prisma.featured.findMany()
    * ```
    */
  get featured(): Prisma.FeaturedDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Restaurant: 'Restaurant',
    Featured: 'Featured'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "restaurant" | "featured"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      Featured: {
        payload: Prisma.$FeaturedPayload<ExtArgs>
        fields: Prisma.FeaturedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeaturedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeaturedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>
          }
          findFirst: {
            args: Prisma.FeaturedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeaturedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>
          }
          findMany: {
            args: Prisma.FeaturedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>[]
          }
          create: {
            args: Prisma.FeaturedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>
          }
          createMany: {
            args: Prisma.FeaturedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeaturedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>[]
          }
          delete: {
            args: Prisma.FeaturedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>
          }
          update: {
            args: Prisma.FeaturedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>
          }
          deleteMany: {
            args: Prisma.FeaturedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeaturedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeaturedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>[]
          }
          upsert: {
            args: Prisma.FeaturedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedPayload>
          }
          aggregate: {
            args: Prisma.FeaturedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatured>
          }
          groupBy: {
            args: Prisma.FeaturedGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeaturedGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeaturedCountArgs<ExtArgs>
            result: $Utils.Optional<FeaturedCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    restaurant?: RestaurantOmit
    featured?: FeaturedOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    rating: number | null
    ratingCount: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    rating: number | null
    ratingCount: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    rating: number | null
    ratingCount: number | null
    category: $Enums.StoreCategory | null
    city: string | null
    priceRange: string | null
    isFavorite: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    rating: number | null
    ratingCount: number | null
    category: $Enums.StoreCategory | null
    city: string | null
    priceRange: string | null
    isFavorite: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    name: number
    description: number
    rating: number
    ratingCount: number
    category: number
    city: number
    priceRange: number
    images: number
    isFavorite: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    rating?: true
    ratingCount?: true
  }

  export type RestaurantSumAggregateInputType = {
    rating?: true
    ratingCount?: true
  }

  export type RestaurantMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rating?: true
    ratingCount?: true
    category?: true
    city?: true
    priceRange?: true
    isFavorite?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rating?: true
    ratingCount?: true
    category?: true
    city?: true
    priceRange?: true
    isFavorite?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    rating?: true
    ratingCount?: true
    category?: true
    city?: true
    priceRange?: true
    images?: true
    isFavorite?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: string
    name: string
    description: string
    rating: number
    ratingCount: number
    category: $Enums.StoreCategory
    city: string
    priceRange: string
    images: string[]
    isFavorite: boolean
    createdAt: Date
    updatedAt: Date
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rating?: boolean
    ratingCount?: boolean
    category?: boolean
    city?: boolean
    priceRange?: boolean
    images?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    featured?: boolean | Restaurant$featuredArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rating?: boolean
    ratingCount?: boolean
    category?: boolean
    city?: boolean
    priceRange?: boolean
    images?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    rating?: boolean
    ratingCount?: boolean
    category?: boolean
    city?: boolean
    priceRange?: boolean
    images?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    rating?: boolean
    ratingCount?: boolean
    category?: boolean
    city?: boolean
    priceRange?: boolean
    images?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "rating" | "ratingCount" | "category" | "city" | "priceRange" | "images" | "isFavorite" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurant"]>
  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    featured?: boolean | Restaurant$featuredArgs<ExtArgs>
  }
  export type RestaurantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RestaurantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      featured: Prisma.$FeaturedPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      rating: number
      ratingCount: number
      category: $Enums.StoreCategory
      city: string
      priceRange: string
      images: string[]
      isFavorite: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantFindManyArgs>(args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends RestaurantCreateArgs>(args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantCreateManyArgs>(args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurants and returns the data saved in the database.
     * @param {RestaurantCreateManyAndReturnArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends RestaurantDeleteArgs>(args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUpdateArgs>(args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUpdateManyArgs>(args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants and returns the data updated in the database.
     * @param {RestaurantUpdateManyAndReturnArgs} args - Arguments to update many Restaurants.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestaurantUpdateManyAndReturnArgs>(args: SelectSubset<T, RestaurantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    featured<T extends Restaurant$featuredArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$featuredArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Restaurant model
   */
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", 'String'>
    readonly name: FieldRef<"Restaurant", 'String'>
    readonly description: FieldRef<"Restaurant", 'String'>
    readonly rating: FieldRef<"Restaurant", 'Float'>
    readonly ratingCount: FieldRef<"Restaurant", 'Int'>
    readonly category: FieldRef<"Restaurant", 'StoreCategory'>
    readonly city: FieldRef<"Restaurant", 'String'>
    readonly priceRange: FieldRef<"Restaurant", 'String'>
    readonly images: FieldRef<"Restaurant", 'String[]'>
    readonly isFavorite: FieldRef<"Restaurant", 'Boolean'>
    readonly createdAt: FieldRef<"Restaurant", 'DateTime'>
    readonly updatedAt: FieldRef<"Restaurant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant createManyAndReturn
   */
  export type RestaurantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurant updateManyAndReturn
   */
  export type RestaurantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to delete.
     */
    limit?: number
  }

  /**
   * Restaurant.featured
   */
  export type Restaurant$featuredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    where?: FeaturedWhereInput
  }

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }


  /**
   * Model Featured
   */

  export type AggregateFeatured = {
    _count: FeaturedCountAggregateOutputType | null
    _min: FeaturedMinAggregateOutputType | null
    _max: FeaturedMaxAggregateOutputType | null
  }

  export type FeaturedMinAggregateOutputType = {
    id: string | null
    text: string | null
    icon: string | null
    restaurantId: string | null
  }

  export type FeaturedMaxAggregateOutputType = {
    id: string | null
    text: string | null
    icon: string | null
    restaurantId: string | null
  }

  export type FeaturedCountAggregateOutputType = {
    id: number
    text: number
    icon: number
    restaurantId: number
    _all: number
  }


  export type FeaturedMinAggregateInputType = {
    id?: true
    text?: true
    icon?: true
    restaurantId?: true
  }

  export type FeaturedMaxAggregateInputType = {
    id?: true
    text?: true
    icon?: true
    restaurantId?: true
  }

  export type FeaturedCountAggregateInputType = {
    id?: true
    text?: true
    icon?: true
    restaurantId?: true
    _all?: true
  }

  export type FeaturedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Featured to aggregate.
     */
    where?: FeaturedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Featureds to fetch.
     */
    orderBy?: FeaturedOrderByWithRelationInput | FeaturedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeaturedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Featureds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Featureds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Featureds
    **/
    _count?: true | FeaturedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeaturedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeaturedMaxAggregateInputType
  }

  export type GetFeaturedAggregateType<T extends FeaturedAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatured]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatured[P]>
      : GetScalarType<T[P], AggregateFeatured[P]>
  }




  export type FeaturedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeaturedWhereInput
    orderBy?: FeaturedOrderByWithAggregationInput | FeaturedOrderByWithAggregationInput[]
    by: FeaturedScalarFieldEnum[] | FeaturedScalarFieldEnum
    having?: FeaturedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeaturedCountAggregateInputType | true
    _min?: FeaturedMinAggregateInputType
    _max?: FeaturedMaxAggregateInputType
  }

  export type FeaturedGroupByOutputType = {
    id: string
    text: string
    icon: string
    restaurantId: string
    _count: FeaturedCountAggregateOutputType | null
    _min: FeaturedMinAggregateOutputType | null
    _max: FeaturedMaxAggregateOutputType | null
  }

  type GetFeaturedGroupByPayload<T extends FeaturedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeaturedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeaturedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeaturedGroupByOutputType[P]>
            : GetScalarType<T[P], FeaturedGroupByOutputType[P]>
        }
      >
    >


  export type FeaturedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    icon?: boolean
    restaurantId?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featured"]>

  export type FeaturedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    icon?: boolean
    restaurantId?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featured"]>

  export type FeaturedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    icon?: boolean
    restaurantId?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featured"]>

  export type FeaturedSelectScalar = {
    id?: boolean
    text?: boolean
    icon?: boolean
    restaurantId?: boolean
  }

  export type FeaturedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "icon" | "restaurantId", ExtArgs["result"]["featured"]>
  export type FeaturedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type FeaturedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type FeaturedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $FeaturedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Featured"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      icon: string
      restaurantId: string
    }, ExtArgs["result"]["featured"]>
    composites: {}
  }

  type FeaturedGetPayload<S extends boolean | null | undefined | FeaturedDefaultArgs> = $Result.GetResult<Prisma.$FeaturedPayload, S>

  type FeaturedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeaturedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeaturedCountAggregateInputType | true
    }

  export interface FeaturedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Featured'], meta: { name: 'Featured' } }
    /**
     * Find zero or one Featured that matches the filter.
     * @param {FeaturedFindUniqueArgs} args - Arguments to find a Featured
     * @example
     * // Get one Featured
     * const featured = await prisma.featured.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeaturedFindUniqueArgs>(args: SelectSubset<T, FeaturedFindUniqueArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Featured that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeaturedFindUniqueOrThrowArgs} args - Arguments to find a Featured
     * @example
     * // Get one Featured
     * const featured = await prisma.featured.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeaturedFindUniqueOrThrowArgs>(args: SelectSubset<T, FeaturedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Featured that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedFindFirstArgs} args - Arguments to find a Featured
     * @example
     * // Get one Featured
     * const featured = await prisma.featured.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeaturedFindFirstArgs>(args?: SelectSubset<T, FeaturedFindFirstArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Featured that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedFindFirstOrThrowArgs} args - Arguments to find a Featured
     * @example
     * // Get one Featured
     * const featured = await prisma.featured.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeaturedFindFirstOrThrowArgs>(args?: SelectSubset<T, FeaturedFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Featureds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Featureds
     * const featureds = await prisma.featured.findMany()
     * 
     * // Get first 10 Featureds
     * const featureds = await prisma.featured.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featuredWithIdOnly = await prisma.featured.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeaturedFindManyArgs>(args?: SelectSubset<T, FeaturedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Featured.
     * @param {FeaturedCreateArgs} args - Arguments to create a Featured.
     * @example
     * // Create one Featured
     * const Featured = await prisma.featured.create({
     *   data: {
     *     // ... data to create a Featured
     *   }
     * })
     * 
     */
    create<T extends FeaturedCreateArgs>(args: SelectSubset<T, FeaturedCreateArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Featureds.
     * @param {FeaturedCreateManyArgs} args - Arguments to create many Featureds.
     * @example
     * // Create many Featureds
     * const featured = await prisma.featured.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeaturedCreateManyArgs>(args?: SelectSubset<T, FeaturedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Featureds and returns the data saved in the database.
     * @param {FeaturedCreateManyAndReturnArgs} args - Arguments to create many Featureds.
     * @example
     * // Create many Featureds
     * const featured = await prisma.featured.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Featureds and only return the `id`
     * const featuredWithIdOnly = await prisma.featured.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeaturedCreateManyAndReturnArgs>(args?: SelectSubset<T, FeaturedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Featured.
     * @param {FeaturedDeleteArgs} args - Arguments to delete one Featured.
     * @example
     * // Delete one Featured
     * const Featured = await prisma.featured.delete({
     *   where: {
     *     // ... filter to delete one Featured
     *   }
     * })
     * 
     */
    delete<T extends FeaturedDeleteArgs>(args: SelectSubset<T, FeaturedDeleteArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Featured.
     * @param {FeaturedUpdateArgs} args - Arguments to update one Featured.
     * @example
     * // Update one Featured
     * const featured = await prisma.featured.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeaturedUpdateArgs>(args: SelectSubset<T, FeaturedUpdateArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Featureds.
     * @param {FeaturedDeleteManyArgs} args - Arguments to filter Featureds to delete.
     * @example
     * // Delete a few Featureds
     * const { count } = await prisma.featured.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeaturedDeleteManyArgs>(args?: SelectSubset<T, FeaturedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Featureds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Featureds
     * const featured = await prisma.featured.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeaturedUpdateManyArgs>(args: SelectSubset<T, FeaturedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Featureds and returns the data updated in the database.
     * @param {FeaturedUpdateManyAndReturnArgs} args - Arguments to update many Featureds.
     * @example
     * // Update many Featureds
     * const featured = await prisma.featured.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Featureds and only return the `id`
     * const featuredWithIdOnly = await prisma.featured.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeaturedUpdateManyAndReturnArgs>(args: SelectSubset<T, FeaturedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Featured.
     * @param {FeaturedUpsertArgs} args - Arguments to update or create a Featured.
     * @example
     * // Update or create a Featured
     * const featured = await prisma.featured.upsert({
     *   create: {
     *     // ... data to create a Featured
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Featured we want to update
     *   }
     * })
     */
    upsert<T extends FeaturedUpsertArgs>(args: SelectSubset<T, FeaturedUpsertArgs<ExtArgs>>): Prisma__FeaturedClient<$Result.GetResult<Prisma.$FeaturedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Featureds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedCountArgs} args - Arguments to filter Featureds to count.
     * @example
     * // Count the number of Featureds
     * const count = await prisma.featured.count({
     *   where: {
     *     // ... the filter for the Featureds we want to count
     *   }
     * })
    **/
    count<T extends FeaturedCountArgs>(
      args?: Subset<T, FeaturedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeaturedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Featured.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeaturedAggregateArgs>(args: Subset<T, FeaturedAggregateArgs>): Prisma.PrismaPromise<GetFeaturedAggregateType<T>>

    /**
     * Group by Featured.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeaturedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeaturedGroupByArgs['orderBy'] }
        : { orderBy?: FeaturedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeaturedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeaturedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Featured model
   */
  readonly fields: FeaturedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Featured.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeaturedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Featured model
   */
  interface FeaturedFieldRefs {
    readonly id: FieldRef<"Featured", 'String'>
    readonly text: FieldRef<"Featured", 'String'>
    readonly icon: FieldRef<"Featured", 'String'>
    readonly restaurantId: FieldRef<"Featured", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Featured findUnique
   */
  export type FeaturedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * Filter, which Featured to fetch.
     */
    where: FeaturedWhereUniqueInput
  }

  /**
   * Featured findUniqueOrThrow
   */
  export type FeaturedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * Filter, which Featured to fetch.
     */
    where: FeaturedWhereUniqueInput
  }

  /**
   * Featured findFirst
   */
  export type FeaturedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * Filter, which Featured to fetch.
     */
    where?: FeaturedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Featureds to fetch.
     */
    orderBy?: FeaturedOrderByWithRelationInput | FeaturedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Featureds.
     */
    cursor?: FeaturedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Featureds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Featureds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Featureds.
     */
    distinct?: FeaturedScalarFieldEnum | FeaturedScalarFieldEnum[]
  }

  /**
   * Featured findFirstOrThrow
   */
  export type FeaturedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * Filter, which Featured to fetch.
     */
    where?: FeaturedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Featureds to fetch.
     */
    orderBy?: FeaturedOrderByWithRelationInput | FeaturedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Featureds.
     */
    cursor?: FeaturedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Featureds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Featureds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Featureds.
     */
    distinct?: FeaturedScalarFieldEnum | FeaturedScalarFieldEnum[]
  }

  /**
   * Featured findMany
   */
  export type FeaturedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * Filter, which Featureds to fetch.
     */
    where?: FeaturedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Featureds to fetch.
     */
    orderBy?: FeaturedOrderByWithRelationInput | FeaturedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Featureds.
     */
    cursor?: FeaturedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Featureds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Featureds.
     */
    skip?: number
    distinct?: FeaturedScalarFieldEnum | FeaturedScalarFieldEnum[]
  }

  /**
   * Featured create
   */
  export type FeaturedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * The data needed to create a Featured.
     */
    data: XOR<FeaturedCreateInput, FeaturedUncheckedCreateInput>
  }

  /**
   * Featured createMany
   */
  export type FeaturedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Featureds.
     */
    data: FeaturedCreateManyInput | FeaturedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Featured createManyAndReturn
   */
  export type FeaturedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * The data used to create many Featureds.
     */
    data: FeaturedCreateManyInput | FeaturedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Featured update
   */
  export type FeaturedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * The data needed to update a Featured.
     */
    data: XOR<FeaturedUpdateInput, FeaturedUncheckedUpdateInput>
    /**
     * Choose, which Featured to update.
     */
    where: FeaturedWhereUniqueInput
  }

  /**
   * Featured updateMany
   */
  export type FeaturedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Featureds.
     */
    data: XOR<FeaturedUpdateManyMutationInput, FeaturedUncheckedUpdateManyInput>
    /**
     * Filter which Featureds to update
     */
    where?: FeaturedWhereInput
    /**
     * Limit how many Featureds to update.
     */
    limit?: number
  }

  /**
   * Featured updateManyAndReturn
   */
  export type FeaturedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * The data used to update Featureds.
     */
    data: XOR<FeaturedUpdateManyMutationInput, FeaturedUncheckedUpdateManyInput>
    /**
     * Filter which Featureds to update
     */
    where?: FeaturedWhereInput
    /**
     * Limit how many Featureds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Featured upsert
   */
  export type FeaturedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * The filter to search for the Featured to update in case it exists.
     */
    where: FeaturedWhereUniqueInput
    /**
     * In case the Featured found by the `where` argument doesn't exist, create a new Featured with this data.
     */
    create: XOR<FeaturedCreateInput, FeaturedUncheckedCreateInput>
    /**
     * In case the Featured was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeaturedUpdateInput, FeaturedUncheckedUpdateInput>
  }

  /**
   * Featured delete
   */
  export type FeaturedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
    /**
     * Filter which Featured to delete.
     */
    where: FeaturedWhereUniqueInput
  }

  /**
   * Featured deleteMany
   */
  export type FeaturedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Featureds to delete
     */
    where?: FeaturedWhereInput
    /**
     * Limit how many Featureds to delete.
     */
    limit?: number
  }

  /**
   * Featured without action
   */
  export type FeaturedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Featured
     */
    select?: FeaturedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Featured
     */
    omit?: FeaturedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    rating: 'rating',
    ratingCount: 'ratingCount',
    category: 'category',
    city: 'city',
    priceRange: 'priceRange',
    images: 'images',
    isFavorite: 'isFavorite',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const FeaturedScalarFieldEnum: {
    id: 'id',
    text: 'text',
    icon: 'icon',
    restaurantId: 'restaurantId'
  };

  export type FeaturedScalarFieldEnum = (typeof FeaturedScalarFieldEnum)[keyof typeof FeaturedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StoreCategory'
   */
  export type EnumStoreCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StoreCategory'>
    


  /**
   * Reference to a field of type 'StoreCategory[]'
   */
  export type ListEnumStoreCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StoreCategory[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    description?: StringFilter<"Restaurant"> | string
    rating?: FloatFilter<"Restaurant"> | number
    ratingCount?: IntFilter<"Restaurant"> | number
    category?: EnumStoreCategoryFilter<"Restaurant"> | $Enums.StoreCategory
    city?: StringFilter<"Restaurant"> | string
    priceRange?: StringFilter<"Restaurant"> | string
    images?: StringNullableListFilter<"Restaurant">
    isFavorite?: BoolFilter<"Restaurant"> | boolean
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    featured?: XOR<FeaturedNullableScalarRelationFilter, FeaturedWhereInput> | null
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    ratingCount?: SortOrder
    category?: SortOrder
    city?: SortOrder
    priceRange?: SortOrder
    images?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    featured?: FeaturedOrderByWithRelationInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    name?: StringFilter<"Restaurant"> | string
    description?: StringFilter<"Restaurant"> | string
    rating?: FloatFilter<"Restaurant"> | number
    ratingCount?: IntFilter<"Restaurant"> | number
    category?: EnumStoreCategoryFilter<"Restaurant"> | $Enums.StoreCategory
    city?: StringFilter<"Restaurant"> | string
    priceRange?: StringFilter<"Restaurant"> | string
    images?: StringNullableListFilter<"Restaurant">
    isFavorite?: BoolFilter<"Restaurant"> | boolean
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    featured?: XOR<FeaturedNullableScalarRelationFilter, FeaturedWhereInput> | null
  }, "id">

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    ratingCount?: SortOrder
    category?: SortOrder
    city?: SortOrder
    priceRange?: SortOrder
    images?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _avg?: RestaurantAvgOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
    _sum?: RestaurantSumOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Restaurant"> | string
    name?: StringWithAggregatesFilter<"Restaurant"> | string
    description?: StringWithAggregatesFilter<"Restaurant"> | string
    rating?: FloatWithAggregatesFilter<"Restaurant"> | number
    ratingCount?: IntWithAggregatesFilter<"Restaurant"> | number
    category?: EnumStoreCategoryWithAggregatesFilter<"Restaurant"> | $Enums.StoreCategory
    city?: StringWithAggregatesFilter<"Restaurant"> | string
    priceRange?: StringWithAggregatesFilter<"Restaurant"> | string
    images?: StringNullableListFilter<"Restaurant">
    isFavorite?: BoolWithAggregatesFilter<"Restaurant"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
  }

  export type FeaturedWhereInput = {
    AND?: FeaturedWhereInput | FeaturedWhereInput[]
    OR?: FeaturedWhereInput[]
    NOT?: FeaturedWhereInput | FeaturedWhereInput[]
    id?: StringFilter<"Featured"> | string
    text?: StringFilter<"Featured"> | string
    icon?: StringFilter<"Featured"> | string
    restaurantId?: StringFilter<"Featured"> | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }

  export type FeaturedOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    icon?: SortOrder
    restaurantId?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
  }

  export type FeaturedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    restaurantId?: string
    AND?: FeaturedWhereInput | FeaturedWhereInput[]
    OR?: FeaturedWhereInput[]
    NOT?: FeaturedWhereInput | FeaturedWhereInput[]
    text?: StringFilter<"Featured"> | string
    icon?: StringFilter<"Featured"> | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }, "id" | "restaurantId">

  export type FeaturedOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    icon?: SortOrder
    restaurantId?: SortOrder
    _count?: FeaturedCountOrderByAggregateInput
    _max?: FeaturedMaxOrderByAggregateInput
    _min?: FeaturedMinOrderByAggregateInput
  }

  export type FeaturedScalarWhereWithAggregatesInput = {
    AND?: FeaturedScalarWhereWithAggregatesInput | FeaturedScalarWhereWithAggregatesInput[]
    OR?: FeaturedScalarWhereWithAggregatesInput[]
    NOT?: FeaturedScalarWhereWithAggregatesInput | FeaturedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Featured"> | string
    text?: StringWithAggregatesFilter<"Featured"> | string
    icon?: StringWithAggregatesFilter<"Featured"> | string
    restaurantId?: StringWithAggregatesFilter<"Featured"> | string
  }

  export type RestaurantCreateInput = {
    id?: string
    name: string
    description: string
    rating: number
    ratingCount: number
    category: $Enums.StoreCategory
    city: string
    priceRange: string
    images?: RestaurantCreateimagesInput | string[]
    isFavorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    featured?: FeaturedCreateNestedOneWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    rating: number
    ratingCount: number
    category: $Enums.StoreCategory
    city: string
    priceRange: string
    images?: RestaurantCreateimagesInput | string[]
    isFavorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    featured?: FeaturedUncheckedCreateNestedOneWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    category?: EnumStoreCategoryFieldUpdateOperationsInput | $Enums.StoreCategory
    city?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    images?: RestaurantUpdateimagesInput | string[]
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    featured?: FeaturedUpdateOneWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    category?: EnumStoreCategoryFieldUpdateOperationsInput | $Enums.StoreCategory
    city?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    images?: RestaurantUpdateimagesInput | string[]
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    featured?: FeaturedUncheckedUpdateOneWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: string
    name: string
    description: string
    rating: number
    ratingCount: number
    category: $Enums.StoreCategory
    city: string
    priceRange: string
    images?: RestaurantCreateimagesInput | string[]
    isFavorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    category?: EnumStoreCategoryFieldUpdateOperationsInput | $Enums.StoreCategory
    city?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    images?: RestaurantUpdateimagesInput | string[]
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    category?: EnumStoreCategoryFieldUpdateOperationsInput | $Enums.StoreCategory
    city?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    images?: RestaurantUpdateimagesInput | string[]
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedCreateInput = {
    id?: string
    text: string
    icon: string
    restaurant: RestaurantCreateNestedOneWithoutFeaturedInput
  }

  export type FeaturedUncheckedCreateInput = {
    id?: string
    text: string
    icon: string
    restaurantId: string
  }

  export type FeaturedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    restaurant?: RestaurantUpdateOneRequiredWithoutFeaturedNestedInput
  }

  export type FeaturedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
  }

  export type FeaturedCreateManyInput = {
    id?: string
    text: string
    icon: string
    restaurantId: string
  }

  export type FeaturedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type FeaturedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStoreCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.StoreCategory | EnumStoreCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.StoreCategory[] | ListEnumStoreCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoreCategory[] | ListEnumStoreCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumStoreCategoryFilter<$PrismaModel> | $Enums.StoreCategory
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FeaturedNullableScalarRelationFilter = {
    is?: FeaturedWhereInput | null
    isNot?: FeaturedWhereInput | null
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    ratingCount?: SortOrder
    category?: SortOrder
    city?: SortOrder
    priceRange?: SortOrder
    images?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantAvgOrderByAggregateInput = {
    rating?: SortOrder
    ratingCount?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    ratingCount?: SortOrder
    category?: SortOrder
    city?: SortOrder
    priceRange?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    ratingCount?: SortOrder
    category?: SortOrder
    city?: SortOrder
    priceRange?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantSumOrderByAggregateInput = {
    rating?: SortOrder
    ratingCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStoreCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StoreCategory | EnumStoreCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.StoreCategory[] | ListEnumStoreCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoreCategory[] | ListEnumStoreCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumStoreCategoryWithAggregatesFilter<$PrismaModel> | $Enums.StoreCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStoreCategoryFilter<$PrismaModel>
    _max?: NestedEnumStoreCategoryFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RestaurantScalarRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type FeaturedCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    icon?: SortOrder
    restaurantId?: SortOrder
  }

  export type FeaturedMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    icon?: SortOrder
    restaurantId?: SortOrder
  }

  export type FeaturedMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    icon?: SortOrder
    restaurantId?: SortOrder
  }

  export type RestaurantCreateimagesInput = {
    set: string[]
  }

  export type FeaturedCreateNestedOneWithoutRestaurantInput = {
    create?: XOR<FeaturedCreateWithoutRestaurantInput, FeaturedUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: FeaturedCreateOrConnectWithoutRestaurantInput
    connect?: FeaturedWhereUniqueInput
  }

  export type FeaturedUncheckedCreateNestedOneWithoutRestaurantInput = {
    create?: XOR<FeaturedCreateWithoutRestaurantInput, FeaturedUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: FeaturedCreateOrConnectWithoutRestaurantInput
    connect?: FeaturedWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStoreCategoryFieldUpdateOperationsInput = {
    set?: $Enums.StoreCategory
  }

  export type RestaurantUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FeaturedUpdateOneWithoutRestaurantNestedInput = {
    create?: XOR<FeaturedCreateWithoutRestaurantInput, FeaturedUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: FeaturedCreateOrConnectWithoutRestaurantInput
    upsert?: FeaturedUpsertWithoutRestaurantInput
    disconnect?: FeaturedWhereInput | boolean
    delete?: FeaturedWhereInput | boolean
    connect?: FeaturedWhereUniqueInput
    update?: XOR<XOR<FeaturedUpdateToOneWithWhereWithoutRestaurantInput, FeaturedUpdateWithoutRestaurantInput>, FeaturedUncheckedUpdateWithoutRestaurantInput>
  }

  export type FeaturedUncheckedUpdateOneWithoutRestaurantNestedInput = {
    create?: XOR<FeaturedCreateWithoutRestaurantInput, FeaturedUncheckedCreateWithoutRestaurantInput>
    connectOrCreate?: FeaturedCreateOrConnectWithoutRestaurantInput
    upsert?: FeaturedUpsertWithoutRestaurantInput
    disconnect?: FeaturedWhereInput | boolean
    delete?: FeaturedWhereInput | boolean
    connect?: FeaturedWhereUniqueInput
    update?: XOR<XOR<FeaturedUpdateToOneWithWhereWithoutRestaurantInput, FeaturedUpdateWithoutRestaurantInput>, FeaturedUncheckedUpdateWithoutRestaurantInput>
  }

  export type RestaurantCreateNestedOneWithoutFeaturedInput = {
    create?: XOR<RestaurantCreateWithoutFeaturedInput, RestaurantUncheckedCreateWithoutFeaturedInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutFeaturedInput
    connect?: RestaurantWhereUniqueInput
  }

  export type RestaurantUpdateOneRequiredWithoutFeaturedNestedInput = {
    create?: XOR<RestaurantCreateWithoutFeaturedInput, RestaurantUncheckedCreateWithoutFeaturedInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutFeaturedInput
    upsert?: RestaurantUpsertWithoutFeaturedInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutFeaturedInput, RestaurantUpdateWithoutFeaturedInput>, RestaurantUncheckedUpdateWithoutFeaturedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumStoreCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.StoreCategory | EnumStoreCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.StoreCategory[] | ListEnumStoreCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoreCategory[] | ListEnumStoreCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumStoreCategoryFilter<$PrismaModel> | $Enums.StoreCategory
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumStoreCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StoreCategory | EnumStoreCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.StoreCategory[] | ListEnumStoreCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.StoreCategory[] | ListEnumStoreCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumStoreCategoryWithAggregatesFilter<$PrismaModel> | $Enums.StoreCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStoreCategoryFilter<$PrismaModel>
    _max?: NestedEnumStoreCategoryFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FeaturedCreateWithoutRestaurantInput = {
    id?: string
    text: string
    icon: string
  }

  export type FeaturedUncheckedCreateWithoutRestaurantInput = {
    id?: string
    text: string
    icon: string
  }

  export type FeaturedCreateOrConnectWithoutRestaurantInput = {
    where: FeaturedWhereUniqueInput
    create: XOR<FeaturedCreateWithoutRestaurantInput, FeaturedUncheckedCreateWithoutRestaurantInput>
  }

  export type FeaturedUpsertWithoutRestaurantInput = {
    update: XOR<FeaturedUpdateWithoutRestaurantInput, FeaturedUncheckedUpdateWithoutRestaurantInput>
    create: XOR<FeaturedCreateWithoutRestaurantInput, FeaturedUncheckedCreateWithoutRestaurantInput>
    where?: FeaturedWhereInput
  }

  export type FeaturedUpdateToOneWithWhereWithoutRestaurantInput = {
    where?: FeaturedWhereInput
    data: XOR<FeaturedUpdateWithoutRestaurantInput, FeaturedUncheckedUpdateWithoutRestaurantInput>
  }

  export type FeaturedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type FeaturedUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantCreateWithoutFeaturedInput = {
    id?: string
    name: string
    description: string
    rating: number
    ratingCount: number
    category: $Enums.StoreCategory
    city: string
    priceRange: string
    images?: RestaurantCreateimagesInput | string[]
    isFavorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUncheckedCreateWithoutFeaturedInput = {
    id?: string
    name: string
    description: string
    rating: number
    ratingCount: number
    category: $Enums.StoreCategory
    city: string
    priceRange: string
    images?: RestaurantCreateimagesInput | string[]
    isFavorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantCreateOrConnectWithoutFeaturedInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutFeaturedInput, RestaurantUncheckedCreateWithoutFeaturedInput>
  }

  export type RestaurantUpsertWithoutFeaturedInput = {
    update: XOR<RestaurantUpdateWithoutFeaturedInput, RestaurantUncheckedUpdateWithoutFeaturedInput>
    create: XOR<RestaurantCreateWithoutFeaturedInput, RestaurantUncheckedCreateWithoutFeaturedInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutFeaturedInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutFeaturedInput, RestaurantUncheckedUpdateWithoutFeaturedInput>
  }

  export type RestaurantUpdateWithoutFeaturedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    category?: EnumStoreCategoryFieldUpdateOperationsInput | $Enums.StoreCategory
    city?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    images?: RestaurantUpdateimagesInput | string[]
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUncheckedUpdateWithoutFeaturedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    category?: EnumStoreCategoryFieldUpdateOperationsInput | $Enums.StoreCategory
    city?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    images?: RestaurantUpdateimagesInput | string[]
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}