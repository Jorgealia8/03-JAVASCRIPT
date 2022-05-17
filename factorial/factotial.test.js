import { factorial } from './factorial';
// describe('Given factorial function', () => {
//     describe('When it is run with x', () => {
//         test('Then it should return x', () => {});
//     });
describe('When it is run with 1', () => {
    test('Then it should return 1', () => {
        const result = 1;
        expect(result).toBe(1);
    });
});

describe('When it is run with 1', () => {
    test('Then it should return 1', () => {
        const result = factorial(1);
        expect(result).toBe(1);
    });
});

describe('When it is run with 5', () => {
    test('Then it should return 120', () => {
        const result = factorial(5);
        expect(result).toBe(120);
    });
});

describe('When it is run with 450', () => {
    test('Then it should return 17333687331126326593447131461045793996778112652090510155692075095553330016834367506046750882904387106145811284518424097858618583806301650208347296181351667570171918700422280962237272230663528084038062312369342674135036610101508838220494970929739011636793766165023730853896403901590836144149594432684204513784716402303182604094683993315061302563918385303341510606761462420205820006936352095967417183191538725617509521380556781309195429800229273803342553558164591996298912368598547771179158461351340068905647127658164836377126303774923360078072307462008554355068361448126606281145760960499187813428397924840592504537849487425060488481036571447957046788635742936714615176219148469743102979949740714485104716169664052397392602848408694007408998901127492905171514473431386633392492040661522692303043813960541966093224243809225137268851717904303214058238447936111678568236973036238404626507890688000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', () => {
        const result = factorial(450);
        expect(result).toBe(
            17333687331126326593447131461045793996778112652090510155692075095553330016834367506046750882904387106145811284518424097858618583806301650208347296181351667570171918700422280962237272230663528084038062312369342674135036610101508838220494970929739011636793766165023730853896403901590836144149594432684204513784716402303182604094683993315061302563918385303341510606761462420205820006936352095967417183191538725617509521380556781309195429800229273803342553558164591996298912368598547771179158461351340068905647127658164836377126303774923360078072307462008554355068361448126606281145760960499187813428397924840592504537849487425060488481036571447957046788635742936714615176219148469743102979949740714485104716169664052397392602848408694007408998901127492905171514473431386633392492040661522692303043813960541966093224243809225137268851717904303214058238447936111678568236973036238404626507890688000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
        );
    });
});